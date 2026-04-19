import React from 'react';
import { Dropdown, Whisper, Popover } from 'rsuite';
import { MoreVertical } from 'lucide-react';

export interface ActionMenuItem {
  label: string;
  icon?: React.ReactNode;
  eventKey: string;
  onClick: () => void;
  isDanger?: boolean;
  active?: boolean;
  activeColor?: string;
  disabled?: boolean;
  children?: ActionMenuItem[];
}

interface ActionMenuProps {
  items: ActionMenuItem[];
  isDark: boolean;
  className?: string;
}

// Type-erased helpers to avoid "union too complex" error in consuming files
const DM: any = Dropdown.Menu;
const DI: any = Dropdown.Item;
const DS: any = Dropdown.Separator;

export default function ActionMenu({ items, isDark, className }: ActionMenuProps) {
  const findItem = (items: ActionMenuItem[], key: string): ActionMenuItem | undefined => {
    for (const item of items) {
      if (item.eventKey === key) return item;
      if (item.children) {
        const found = findItem(item.children, key);
        if (found) return found;
      }
    }
    return undefined;
  };

  const renderItem = (item: ActionMenuItem, idx: number) => {
    if (item.children && item.children.length > 0) {
      return (
        <Dropdown.Menu 
          key={item.eventKey} 
          title={item.label} 
          icon={item.icon as any} 
          trigger="hover"
          // Force the submenu to the left via style if needed, 
          // though pullLeft should handle it. 
          // We'll add a style hint to ensure it's prioritized.
          style={{ position: 'relative' }}
          className="rs-dropdown-menu-pull-left"
        >
          {item.children.map((child, cIdx) => renderItem(child, cIdx))}
        </Dropdown.Menu>
      );
    }

    const activeStyle = item.active && item.activeColor ? {
      color: item.activeColor,
      fontWeight: 'bold',
      backgroundColor: isDark ? `${item.activeColor}10` : `${item.activeColor}15`,
    } : {};

    return (
      <React.Fragment key={item.eventKey}>
        {idx > 0 && item.isDanger && <DS />}
        <DI 
          eventKey={item.eventKey} 
          icon={item.icon as any}
          active={item.active}
          disabled={item.disabled}
          style={activeStyle}
          className={item.active && !item.activeColor ? (isDark ? '!bg-blue-500/20 !text-blue-400' : '!bg-blue-50 !text-blue-600') : ''}
        >
          <span className={`
            ${item.isDanger ? 'text-red-500 font-medium' : ''}
            ${item.active ? 'font-bold' : ''}
          `}>
            {item.label}
          </span>
        </DI>
      </React.Fragment>
    );
  };

  const menu = (
    <Popover full>
      <DM onSelect={(key: string) => {
        const item = findItem(items, key);
        if (item) item.onClick();
      }}>
        {items.map((item, idx) => renderItem(item, idx))}
      </DM>
    </Popover>
  );

  return (
    <Whisper 
      placement="bottomEnd" 
      trigger="click" 
      speaker={menu} 
      container={() => document.body}
    >
      <button
        type="button"
        style={{ 
          padding: '6px', 
          borderRadius: '8px', 
          transition: 'all 0.2s', 
          background: 'none', 
          border: 'none', 
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
        className={`${isDark ? 'hover:bg-slate-800 text-slate-400 hover:text-white' : 'hover:bg-slate-100 text-slate-500 hover:text-slate-900'} ${className || ''}`}
      >
        <MoreVertical size={16} />
      </button>
    </Whisper>
  );
}
