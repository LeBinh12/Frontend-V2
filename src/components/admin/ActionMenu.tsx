import React from 'react';
import { Dropdown, Whisper, Popover } from 'rsuite';
import { MoreVertical } from 'lucide-react';

export interface ActionMenuItem {
  label: string;
  icon?: React.ReactNode;
  eventKey: string;
  onClick: () => void;
  isDanger?: boolean;
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
  const menu = (
    <Popover full>
      <DM onSelect={(key: string) => {
        const item = items.find(i => i.eventKey === key);
        if (item) item.onClick();
      }}>
        {items.map((item, idx) => (
          <React.Fragment key={item.eventKey}>
            {idx > 0 && item.isDanger && <DS />}
            <DI eventKey={item.eventKey} icon={item.icon}>
              <span className={item.isDanger ? 'text-red-500 font-medium' : ''}>{item.label}</span>
            </DI>
          </React.Fragment>
        ))}
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
