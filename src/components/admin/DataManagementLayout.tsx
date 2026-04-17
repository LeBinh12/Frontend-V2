import type { ReactNode } from "react";
import { Button, Container, Content, CustomProvider, Header, Drawer, IconButton, Stack, Input, InputGroup } from "rsuite";
import TagFilterIcon from "@rsuite/icons/TagFilter";
import { Filter, Search } from 'lucide-react';
import { useTranslation } from 'react-i18next';

type DataManagementLayoutProps = {
    searchTerm: string;
    onSearchTermChange: (value: string) => void;
    onSearch: () => void;
    advancedOpen: boolean;
    onToggleAdvanced: () => void;
    advancedContent?: ReactNode;
    children: ReactNode;
    searchPlaceholder?: string;
    advancedButtonLabels?: {
        open: string;
        close: string;
    };
    classNamePrefix?: string;
    searchBarExtras?: ReactNode;
    advancedActions?: ReactNode;
    drawerActions?: ReactNode;
    controlSize?: "xs" | "sm" | "md" | "lg";
    headerId?: string;
    searchBarId?: string;
    advancedToggleType?: 'button' | 'icon';
    forceAdvancedToggle?: boolean;
    filterControls?: ReactNode;
    drawerSize?: "xs" | "sm" | "md" | "lg" | "full";
    drawerClassName?: string;
    isDark?: boolean;
    hideSearch?: boolean;
};

const DataManagementLayout = ({
    searchTerm,
    onSearchTermChange,
    onSearch,
    advancedOpen,
    onToggleAdvanced,
    advancedContent,
    children,
    searchPlaceholder = "Nhập từ khóa tìm kiếm",
    advancedButtonLabels = {
        open: "",
        close: "Thu gọn"
    },
    classNamePrefix = "data-management",
    searchBarExtras,
    advancedActions,
    drawerActions,
    controlSize,
    headerId,
    searchBarId,
    advancedToggleType = 'button',
    forceAdvancedToggle = false,
    filterControls,
    drawerSize = "md",
    drawerClassName,
    isDark = true,
    hideSearch = false
}: DataManagementLayoutProps) => {
    const { t } = useTranslation();
    const withPrefix = (element?: string) =>
        element ? `${classNamePrefix}__${element}` : classNamePrefix;
    const hasAdvancedSearch = Boolean(advancedContent) || forceAdvancedToggle;

    return (
        <CustomProvider theme={isDark ? 'dark' : 'light'}>
        <Container className={withPrefix()} style={{ display: "flex", flexDirection: "column", height: "100%", position: "relative", background: isDark ? "#030816" : "#f8fafc" }}>
            <Header
                className={`${withPrefix("header")} glass-effect`}
                style={{
                    position: "sticky",
                    top: 0,
                    zIndex: 0,
                    borderBottom: `1px solid ${isDark ? '#1e293b' : '#e2e8f0'}`,
                    padding: "12px 16px",
                    background: isDark ? '#0f172a' : '#ffffff',
                    boxShadow: isDark ? '0 1px 0 #1e293b' : '0 1px 0 #e2e8f0',
                }}
                id={headerId}
            >
                <div
                    className={withPrefix("search-container")}
                    style={{ width: "100%" }}
                >
                    <div className={withPrefix("search-bar")} id={searchBarId} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16 }}>
                        {/* Left: Search & Filters */}
                        {!hideSearch && (
                            <div className="flex items-center gap-4 flex-1">
                                <InputGroup inside size={controlSize} className="flex-1 max-w-md">
                                    <InputGroup.Addon>
                                        <Search size={16} />
                                    </InputGroup.Addon>
                                    <Input
                                        size={controlSize}
                                        placeholder={searchPlaceholder || t('admin.common.search') + "..."}
                                        value={searchTerm}
                                        onChange={onSearchTermChange}
                                        onKeyDown={(e) => e.key === 'Enter' && onSearch()}
                                    />
                                </InputGroup>
                                {filterControls}
                            </div>
                        )}

                        {hideSearch && <div className="flex-1" />}

                        {/* Right: Actions */}
                        <Stack spacing={12} className={withPrefix("search-actions")}>
                            {hasAdvancedSearch ? (
                                <>
                                    {advancedToggleType === 'icon' ? (
                                        /* @ts-ignore */
                                        <IconButton
                                            icon={<TagFilterIcon />}
                                            size={controlSize}
                                            appearance={advancedOpen ? "primary" : "default"}
                                            className={withPrefix("advanced-button")}
                                            onClick={onToggleAdvanced}
                                            title={advancedButtonLabels.open}
                                        />
                                    ) : (
                                        /* @ts-ignore */
                                        <Button
                                            size={controlSize}
                                            appearance={advancedOpen ? "primary" : "ghost"}
                                            className={withPrefix("advanced-button")}
                                            onClick={onToggleAdvanced}
                                        >
                                            <TagFilterIcon className={withPrefix("advanced-icon")} />
                                            <span>{advancedButtonLabels.open}</span>
                                        </Button>
                                    )}
                                </>
                            ) : null}
                            {searchBarExtras}
                        </Stack>
                    </div>
                </div>
            </Header>

            <Content className={withPrefix("content")} style={{ flex: 1, display: 'flex', flexDirection: 'column', minHeight: 0, overflow: 'hidden', background: isDark ? '#030816' : '#f1f5f9' }}>{children}</Content>

            {advancedContent && (
                <Drawer
                    placement="right"
                    open={advancedOpen}
                    onClose={onToggleAdvanced}
                    size={drawerSize}
                    className={drawerClassName}
                >
                    <Drawer.Header>
                        <Drawer.Title><span className="font-bold text-[#00568c] flex items-center gap-2"><Filter size={18} /> {advancedButtonLabels.open || t('admin.common.filter')}</span></Drawer.Title>
                        {drawerActions && (
                            <Drawer.Actions>
                                {drawerActions}
                            </Drawer.Actions>
                        )}
                    </Drawer.Header>
                    <Drawer.Body style={{ padding: 0 }}>
                        {advancedContent}
                    </Drawer.Body>
                    {advancedActions && (
                        <Drawer.Footer className="!p-4 border-t border-gray-200">
                            {advancedActions}
                        </Drawer.Footer>
                    )}
                </Drawer>
            )}
        </Container>
        </CustomProvider>

    );
};

export default DataManagementLayout;
