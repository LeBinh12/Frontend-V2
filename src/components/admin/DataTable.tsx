import { type ReactNode, useMemo, useRef, useEffect, useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { createPortal } from "react-dom";
import { Notification, useToaster } from "rsuite";
import { AgGridReact } from "ag-grid-react";
import { themeQuartz, colorSchemeDark } from "ag-grid-community";
import { Loader2 } from 'lucide-react';

const themeQuartzDarkMode = themeQuartz.withPart(colorSchemeDark);
import type {
    ColDef,
    ColSpanParams,
    GetRowIdParams,
    GridReadyEvent,
    ICellRendererParams,
    GridApi,
    GridOptions,
    ValueFormatterParams,
    ValueGetterParams,
    ValueParserParams,
    ValueSetterParams
} from "ag-grid-community";

import { ModuleRegistry, ClientSideRowModelModule, CsvExportModule, RowSelectionModule, PaginationModule, ValidationModule, UndoRedoEditModule } from "ag-grid-community";

ModuleRegistry.registerModules([
    ClientSideRowModelModule,
    CsvExportModule,
    RowSelectionModule,
    PaginationModule,
    ValidationModule,
    UndoRedoEditModule
]);

const getAgGridLocale = (t: any) => ({
    // Paging
    page: t('admin.grid.page'),
    more: t('admin.grid.more', 'Thêm'),
    to: t('admin.grid.to'),
    of: t('admin.grid.of'),
    next: t('admin.grid.next'),
    last: t('admin.grid.last'),
    first: t('admin.grid.first'),
    previous: t('admin.grid.previous'),
    loadingOoo: t('admin.grid.loading', 'Đang tải...'),
    selectAll: t('admin.grid.selectAll', '(Chọn tất cả)'),
    searchOoo: t('admin.grid.searchOoo', 'Tìm kiếm...'),
    blanks: t('admin.grid.blanks', '(Trống)'),
    filterOoo: t('admin.grid.filterOoo', 'Bộ lọc...'),
    applyFilter: t('admin.grid.applyFilter', 'Áp dụng bộ lọc...'),
    equals: t('admin.grid.equals', 'Bằng'),
    notEqual: t('admin.grid.notEqual', 'Khác'),
    lessThan: t('admin.grid.lessThan', 'Nhỏ hơn'),
    greaterThan: t('admin.grid.greaterThan', 'Lớn hơn'),
    pageSizeSelectorLabel: t('admin.grid.rowsPerPage'),
    nextPage: t('admin.grid.nextPage', 'Trang kế'),
    lastPage: t('admin.grid.lastPage', 'Trang cuối'),
    firstPage: t('admin.grid.firstPage', 'Trang đầu'),
    previousPage: t('admin.grid.previousPage', 'Trang trước'),
});

export type DataTableColumn<TData> = {
    key: string;
    header: ReactNode;
    width?: number;
    minWidth?: number;
    maxWidth?: number;
    flexGrow?: number;
    align?: "left" | "center" | "right";
    fixed?: boolean | "left" | "right";
    dataKey?: keyof TData;
    render?: (row: TData) => ReactNode;
    cellClassName?: string;
    drawerClassName?: string;
    isDark?: boolean;
    headerClassName?: string;
    sortable?: boolean;
    resizable?: boolean;
    filter?: ColDef<TData>["filter"]; // enable default or provide filter type
    filterParams?: ColDef<TData>["filterParams"];
    editable?: boolean;
    valueFormatter?: (params: ValueFormatterParams<TData>) => string | number;
    valueParser?: (params: ValueParserParams<TData>) => unknown;
    valueGetter?: (params: ValueGetterParams<TData>) => unknown;
    valueSetter?: (params: ValueSetterParams<TData>) => boolean;
    comparator?: ColDef<TData>["comparator"];
    /** @deprecated Use rowSelection.checkboxes in DataTable props instead. */
    checkboxSelection?: boolean;
    /** @deprecated Use rowSelection.headerCheckbox in DataTable props instead. */
    headerCheckboxSelection?: boolean;
    rowDrag?: boolean;
    visible?: boolean;
    suppressSizeToFit?: boolean;
    colSpan?: (params: ColSpanParams<TData>) => number;
};

type GridRowSelectionConfig<TData> = Exclude<
    GridOptions<TData>["rowSelection"],
    "single" | "multiple" | "none" | undefined
>;

type DataTableRowSelection<TData> =
    | "single"
    | "multiple"
    | "none"
    | GridRowSelectionConfig<TData>;

type DataTableProps<TData> = {
    data?: TData[];
    total?: number;
    page?: number;
    limit?: number;
    onChangePage?: (page: number) => void;
    onChangeLimit?: (limit: number) => void;
    columns: Array<DataTableColumn<TData>>;
    limitOptions?: number[];
    rowKey?: keyof TData;
    classNamePrefix?: string;
    panelClassName?: string;
    tableClassName?: string;
    paginationClassName?: string;
    visuallyHiddenClassName?: string;
    quickFilterText?: string;
    rowSelection?: DataTableRowSelection<TData>;
    /** @deprecated Use rowSelection.enableClickSelection (and related options) instead. */
    suppressRowClickSelection?: boolean;
    onSelectionChange?: (rows: TData[]) => void;
    enablePagination?: boolean;
    enableNativePagination?: boolean;
    gridHeight?: number | string;
    autoFitHeight?: boolean;
    autoFitBottomGap?: number;
    minAutoFitHeight?: number;
    autoFitWatchKeys?: unknown[];
    enableContextMenu?: boolean;
    pinnedTopRowData?: TData[];
    // Tree Data / Row Grouping
    treeData?: boolean;
    getDataPath?: (data: TData) => string[];
    autoGroupColumnDef?: ColDef<TData>;
    groupDefaultExpanded?: number;
    // Infinite Row Model (server-side fetching)
    rowModelType?: "clientSide" | "infinite";
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    fetchRows?: (args: { startRow: number; endRow: number; sortModel: any; filterModel: any }) => Promise<{ rows: TData[]; total: number }>;
    cacheBlockSize?: number;
    maxBlocksInCache?: number;
    onApiReady?: (api: GridApi<TData>) => void;
    onCellClicked?: (row: TData, colKey: string) => void;
    loading?: boolean;
    emptyText?: string;
    // Sorting
    sortColumn?: string;
    sortType?: 'asc' | 'desc';
    onSortColumn?: (column: string, type: 'asc' | 'desc') => void;
    isDark?: boolean;
};

type ContextMenuItemIcon =
    | "cut"
    | "copy"
    | "copy-header"
    | "clipboard"
    | "chart"
    | "export"
    | "view"
    | "edit"
    | "delete"
    | "blank";

type ContextMenuItemEntry = {
    type: "item";
    key: string;
    label: string;
    action?: () => void | Promise<void>;
    disabled?: boolean;
    shortcut?: string;
    submenu?: ContextMenuEntry[];
    icon?: ContextMenuItemIcon;
};

type ContextMenuSeparatorEntry = {
    type: "separator";
    key: string;
};

type ContextMenuEntry = ContextMenuItemEntry | ContextMenuSeparatorEntry;

const DEFAULT_MULTI_ROW_SELECTION = Object.freeze({
    mode: "multiRow" as const,
    enableClickSelection: true as const,
    enableSelectionWithoutKeys: true as const,
    checkboxes: true as const,
    headerCheckbox: true as const
});

const renderContextMenuIcon = (icon?: ContextMenuItemEntry["icon"]): ReactNode => {
    if (!icon || icon === "blank") {
        return null;
    }

    const commonProps = {
        width: 18,
        height: 18,
        viewBox: "0 0 18 18",
        fill: "none",
        role: "presentation" as const,
        focusable: false,
        "aria-hidden": true
    };

    switch (icon) {
        case "cut":
            return (
                <svg {...commonProps}>
                    <circle cx={5.25} cy={5.25} r={2.1} stroke="currentColor" strokeWidth={1.3} />
                    <circle cx={5.25} cy={12.75} r={2.1} stroke="currentColor" strokeWidth={1.3} />
                    <path d="M7.8 6.3 15 3.3" stroke="currentColor" strokeWidth={1.3} strokeLinecap="round" />
                    <path d="M7.8 11.7 15 14.7" stroke="currentColor" strokeWidth={1.3} strokeLinecap="round" />
                    <path d="M15 9h-6" stroke="currentColor" strokeWidth={1.3} strokeLinecap="round" />
                </svg>
            );
        case "copy":
            return (
                <svg {...commonProps}>
                    <rect
                        x={5.35}
                        y={2.55}
                        width={7.4}
                        height={9.4}
                        rx={1.4}
                        stroke="currentColor"
                        strokeWidth={1.3}
                    />
                    <rect
                        x={4.1}
                        y={6.05}
                        width={7.4}
                        height={9.4}
                        rx={1.4}
                        stroke="currentColor"
                        strokeWidth={1.3}
                        fill="rgba(148, 163, 184, 0.08)"
                    />
                </svg>
            );
        case "copy-header":
            return (
                <svg {...commonProps}>
                    <rect
                        x={5.35}
                        y={2.55}
                        width={7.4}
                        height={9.4}
                        rx={1.4}
                        stroke="currentColor"
                        strokeWidth={1.3}
                        fill="rgba(148, 163, 184, 0.08)"
                    />
                    <rect
                        x={4.1}
                        y={6.05}
                        width={7.4}
                        height={9.4}
                        rx={1.4}
                        stroke="currentColor"
                        strokeWidth={1.3}
                        fill="rgba(148, 163, 184, 0.08)"
                    />
                    <rect
                        x={5.95}
                        y={3.55}
                        width={5}
                        height={2}
                        rx={0.8}
                        fill="currentColor"
                        opacity={0.35}
                    />
                </svg>
            );
        case "clipboard":
            return (
                <svg {...commonProps}>
                    <rect
                        x={5.1}
                        y={4.2}
                        width={7.8}
                        height={10.2}
                        rx={1.3}
                        stroke="currentColor"
                        strokeWidth={1.3}
                    />
                    <rect
                        x={6.4}
                        y={2.7}
                        width={5.1}
                        height={1.6}
                        rx={0.7}
                        fill="currentColor"
                        opacity={0.25}
                    />
                    <path
                        d="M6.3 6.6h4.8"
                        stroke="currentColor"
                        strokeWidth={1.2}
                        strokeLinecap="round"
                    />
                    <path
                        d="M6.3 9h4.8"
                        stroke="currentColor"
                        strokeWidth={1.2}
                        strokeLinecap="round"
                    />
                </svg>
            );
        case "chart":
            return (
                <svg {...commonProps}>
                    <rect x={3.5} y={8.8} width={2.1} height={4.7} rx={0.7} fill="currentColor" opacity={0.45} />
                    <rect x={7.05} y={6.6} width={2.1} height={6.9} rx={0.7} fill="currentColor" opacity={0.75} />
                    <rect x={10.6} y={4.4} width={2.1} height={9.1} rx={0.7} fill="currentColor" />
                    <path d="M3 14.7h12" stroke="currentColor" strokeWidth={1.1} strokeLinecap="round" opacity={0.35} />
                </svg>
            );
        case "export":
            return (
                <svg {...commonProps}>
                    <path
                        d="M6 12.6h6.4a1.1 1.1 0 0 0 1.1-1.1V4.5"
                        stroke="currentColor"
                        strokeWidth={1.3}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        opacity={0.85}
                    />
                    <path
                        d="M9.8 6.2 12 4 9.8 1.8"
                        stroke="currentColor"
                        strokeWidth={1.3}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path d="M12 4H3.6a1.1 1.1 0 0 0-1.1 1.1v8.1" stroke="currentColor" strokeWidth={1.3} strokeLinecap="round" />
                </svg>
            );
        default:
            return null;
    }
};

const DataTable = <TData,>({
    data = [],
    total = 0,
    page,
    limit,
    onChangePage,
    onChangeLimit,
    columns,
    limitOptions = [10, 20, 50, 100],
    rowKey,
    classNamePrefix = "data-management",
    panelClassName,
    tableClassName,
    quickFilterText,
    rowSelection: rowSelectionProp,
    suppressRowClickSelection = false,
    onSelectionChange,
    enablePagination = true,
    gridHeight,
    autoFitHeight = true,
    autoFitBottomGap = 16,
    minAutoFitHeight = 240,
    autoFitWatchKeys,
    enableContextMenu = false,
    pinnedTopRowData,
    treeData,
    getDataPath,
    autoGroupColumnDef,
    groupDefaultExpanded,
    rowModelType,
    fetchRows,
    cacheBlockSize = 100,
    maxBlocksInCache = 10,
    onApiReady,
    onCellClicked,
    enableNativePagination = false,
    loading,
    emptyText,
    sortColumn,
    sortType,
    onSortColumn,
    isDark = true
}: DataTableProps<TData>) => {
    const { t, i18n } = useTranslation();
    const withPrefix = (element?: string) =>
        element ? `${classNamePrefix}__${element}` : classNamePrefix;

    const resolvedPanelClass = panelClassName ?? withPrefix("table-panel");
    const resolvedTableClass = tableClassName ?? withPrefix("table");

    const gridClass = `${resolvedTableClass} ag-theme-quartz`;
    const gridRef = useRef<AgGridReact<TData>>(null);
    const gridContainerRef = useRef<HTMLDivElement>(null);
    const toaster = useToaster();
    const hasRowDragColumn = useMemo(() => columns.some(column => column.rowDrag), [columns]);
    const gridApiRef = useRef<GridApi<TData> | null>(null);
    const [columnVisibility, setColumnVisibility] = useState<Record<string, boolean>>(() => {
        const map: Record<string, boolean> = {};
        columns.forEach(column => {
            map[column.key] = column.visible !== false;
        });
        return map;
    });
    const [openSubmenuKey, setOpenSubmenuKey] = useState<string | null>(null);
    const [activeItemKey, setActiveItemKey] = useState<string | null>(null);
    const normalizedRowSelection = rowSelectionProp ?? DEFAULT_MULTI_ROW_SELECTION;

    const hasPagination = enablePagination;
    const resolvedLimitOptions = limitOptions ?? [10, 20, 50, 100];
    const currentPage = Number(page ?? 1) || 1;
    const currentLimit = Number(limit ?? resolvedLimitOptions[0] ?? 10) || 10;
    
    const totalPages = total ? Math.ceil(total / currentLimit) : 1;
    const startItem = total ? (currentPage - 1) * currentLimit + 1 : 0;
    const endItem = total ? Math.min(currentPage * currentLimit, total) : data.length;


    const resolvedRowSelection = useMemo<GridOptions<TData>["rowSelection"]>(() => {
        if (!normalizedRowSelection || normalizedRowSelection === "none") {
            return undefined;
        }

        type RowSelectionDefaults = {
            enableClickSelection?: boolean | "enableSelection" | "enableDeselection";
            enableSelectionWithoutKeys?: boolean;
            checkboxes?: boolean;
            headerCheckbox?: boolean;
        };

        const applyClickSelectionPreference = (
            config: DataTableRowSelection<TData>,
            defaults: RowSelectionDefaults = {}
        ): GridOptions<TData>["rowSelection"] => {
            if (typeof config !== "object" || config === null) {
                if (config === "single") return { mode: "singleRow", enableClickSelection: true };
                if (config === "multiple") return { mode: "multiRow", enableClickSelection: true, checkboxes: true, headerCheckbox: true };
                return config as any;
            }

            const nextConfig: Record<string, unknown> = { ...config };

            if (suppressRowClickSelection) {
                nextConfig["enableClickSelection"] = false;
            } else if (
                defaults.enableClickSelection !== undefined &&
                nextConfig["enableClickSelection"] === undefined
            ) {
                nextConfig["enableClickSelection"] = defaults.enableClickSelection;
            }

            if (
                !suppressRowClickSelection &&
                defaults.enableSelectionWithoutKeys !== undefined &&
                nextConfig["enableSelectionWithoutKeys"] === undefined
            ) {
                nextConfig["enableSelectionWithoutKeys"] = defaults.enableSelectionWithoutKeys;
            }

            if (defaults.checkboxes !== undefined && nextConfig["checkboxes"] === undefined) {
                nextConfig["checkboxes"] = defaults.checkboxes;
            }

            if (defaults.headerCheckbox !== undefined && nextConfig["headerCheckbox"] === undefined) {
                nextConfig["headerCheckbox"] = defaults.headerCheckbox;
            }

            return nextConfig as any;
        };

        if (typeof normalizedRowSelection !== "string") {
            return applyClickSelectionPreference(normalizedRowSelection);
        }

        if (normalizedRowSelection === "single") {
            return applyClickSelectionPreference({ mode: "singleRow" }, { enableClickSelection: true });
        }

        return applyClickSelectionPreference(
            { mode: "multiRow" },
            {
                enableClickSelection: true,
                enableSelectionWithoutKeys: true,
                checkboxes: true,
                headerCheckbox: true
            }
        );
    }, [normalizedRowSelection, suppressRowClickSelection]);

    useEffect(() => {
        if (suppressRowClickSelection) {
            console.warn(
                "DataTable: suppressRowClickSelection is deprecated. The component now manages rowSelection.enableClickSelection automatically."
            );
        }
    }, [suppressRowClickSelection]);

    const pushToast = useCallback(
        (header: string, message: string, type: "success" | "info" | "warning" | "error" = "success") => {
            if (!toaster) {
                console.warn("RSuite toaster instance is unavailable", { header, message, type });
                return;
            }

            try {
                toaster.push(
                    <Notification closable type={type} header={header}>
                        <span>{message}</span>
                    </Notification>,
                    { placement: "topEnd", duration: 3500 }
                );
            } catch (error) {
                console.error("Failed to push toast", error, { header, message, type });
            }
        },
        [toaster]
    );

    useEffect(() => {
        setColumnVisibility(previous => {
            const next: Record<string, boolean> = {};
            columns.forEach(column => {
                next[column.key] = previous[column.key] ?? (column.visible !== false);
            });
            return next;
        });
    }, [columns]);

    const getRowId = useMemo(() => {
        const generateFallbackId = () =>
            typeof crypto !== "undefined" && "randomUUID" in crypto
                ? (crypto.randomUUID as () => string)()
                : Math.random().toString(36).slice(2);

        if (rowKey) {
            return (params: GetRowIdParams<TData>) => {
                const data = params.data as TData | undefined;
                const value = data?.[rowKey];

                if (value != null) {
                    return String(value);
                }

                const fallback = (data as Record<string, unknown> | undefined)?.id ?? generateFallbackId();
                return String(fallback);
            };
        }

        return (params: GetRowIdParams<TData>) => {
            const data = params.data as TData | undefined;
            const candidate = (data as Record<string, unknown> | undefined)?.id ?? generateFallbackId();
            return String(candidate);
        };
    }, [rowKey]);

    const columnDefs = useMemo<ColDef<TData>[]>(() => {
        const mappedColumnDefs = columns.map(column => {
            const cellClasses: string[] = [];
            const headerClasses: string[] = [];

            if (column.cellClassName) {
                cellClasses.push(column.cellClassName);
            }

            if (column.headerClassName) {
                headerClasses.push(column.headerClassName);
            }

            if (column.align === "center") {
                cellClasses.push("ag-center-aligned-cell");
                headerClasses.push("ag-center-aligned-header");
            } else if (column.align === "right") {
                cellClasses.push("ag-right-aligned-cell");
                headerClasses.push("ag-right-aligned-header");
            }

            const pinned = column.fixed === true ? "left" : column.fixed;

            const isVisible = columnVisibility[column.key] ?? true;
            const hasExplicitWidth = column.width !== undefined;

            const colDef: ColDef<TData> = {
                colId: column.key,
                width: column.width,
                // Allow smaller widths than default if explicit width is set
                minWidth: column.minWidth ?? (hasExplicitWidth ? column.width : undefined),
                maxWidth: column.maxWidth,
                // If width is explicit, disable flex unless explicitly set
                flex: column.flexGrow ?? (hasExplicitWidth ? 0 : undefined),
                pinned: pinned === "left" || pinned === "right" ? pinned : undefined,
                sortable: column.sortable ?? undefined,
                resizable: column.resizable ?? true,
                cellClass: cellClasses.length ? cellClasses.join(" ") : undefined,
                headerClass: headerClasses.length ? headerClasses.join(" ") : undefined,
                hide: !isVisible,
                // Prevent sizeColumnsToFit from resizing fixed-width columns
                suppressSizeToFit: column.suppressSizeToFit ?? hasExplicitWidth,
                cellStyle: () => ({
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: column.align === 'center' ? 'center' : (column.align === 'right' ? 'flex-end' : 'flex-start'),
                    height: '100%',
                    width: '100%',
                    fontSize: '14px',
                    color: isDark ? '#cbd5e1' : '#374151',
                    paddingTop: 0,
                    paddingBottom: 0
                })
            };

            if (column.align === "center") {
                headerClasses.push("!flex !items-center !justify-center");
            } else if (column.align === "right") {
                headerClasses.push("!flex !items-center !justify-end");
            } else {
                headerClasses.push("!flex !items-center !justify-start");
            }

            if (typeof column.header === "string") {
                colDef.headerName = column.header;
            } else if (column.header !== undefined) {
                const HeaderComponent = () => <>{column.header}</>;
                colDef.headerComponent = HeaderComponent;
            }

            if (column.render) {
                colDef.cellRenderer = (params: ICellRendererParams<TData>) => {
                    if (!params.data) {
                        return null;
                    }
                    return (
                        <div className="!w-full !flex !items-center" style={{
                            justifyContent: column.align === 'center' ? 'center' : (column.align === 'right' ? 'flex-end' : 'flex-start'),
                        }}>
                             {column.render!(params.data as TData)}
                        </div>
                    );
                };
                // Set field to enable filtering/sorting even with custom renderer
                if (column.dataKey) {
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    colDef.field = column.dataKey as any;
                } else {
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    colDef.field = column.key as any;
                }
            } else if (column.dataKey) {
                const dataKey = column.dataKey;
                colDef.valueGetter = params => {
                    const data = params.data as TData | undefined;
                    return data ? (data[dataKey] as unknown) : null;
                };
            } else {
                // If no render and no dataKey, use colId as field
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                colDef.field = column.key as any;
            }

            if (sortColumn === column.key) {
                colDef.sort = sortType;
            }

            if (column.colSpan) {
                colDef.colSpan = params => column.colSpan!(params as ColSpanParams<TData>);
            }

            if (column.filter !== undefined) {
                colDef.filter = column.filter;
                if (column.filter === false) {
                    colDef.floatingFilter = false;
                }
            } else {
                colDef.filter = false;
            }

            if (column.filterParams) {
                colDef.filterParams = column.filterParams;
            }

            if (column.editable !== undefined) {
                colDef.editable = column.editable;
            }

            if (column.valueFormatter) {
                colDef.valueFormatter = params => {
                    const result = column.valueFormatter!(params as ValueFormatterParams<TData>);
                    return result == null ? "" : String(result);
                };
            }

            if (column.valueParser) {
                colDef.valueParser = params => column.valueParser!(params as ValueParserParams<TData>);
            }

            if (column.valueGetter) {
                colDef.valueGetter = params => column.valueGetter!(params as ValueGetterParams<TData>);
            }

            if (column.valueSetter) {
                colDef.valueSetter = params => column.valueSetter!(params as ValueSetterParams<TData>);
            }

            if (column.comparator) {
                colDef.comparator = column.comparator;
            }

            if (column.rowDrag !== undefined) {
                colDef.rowDrag = column.rowDrag;
            }

            return colDef;
        });

        return mappedColumnDefs;
    }, [columnVisibility, columns, sortColumn, sortType, isDark, t]);


    const defaultColDef = useMemo<ColDef>(() => ({
        sortable: false,
        filter: false,
        floatingFilter: false,
        resizable: true,
        editable: false,
        enableRowGroup: false,
        enablePivot: false,
        minWidth: 120,
        flex: 1,
        suppressHeaderMenuButton: true,
        headerClass: isDark ? 'text-slate-400 bg-[#0f172a] font-semibold border-b border-slate-800' : 'text-gray-600 bg-gray-50/80 font-semibold border-b border-gray-100',
    }), [isDark]);

    const applyQuickFilter = useCallback((api: GridReadyEvent<TData>["api"], value: string | undefined) => {
        const nextValue = value ?? "";

        if (typeof api.setGridOption === "function") {
            api.setGridOption("quickFilterText", nextValue);
            return;
        }

        const legacyApi = api as unknown as { setQuickFilter?: (text: string) => void };
        legacyApi.setQuickFilter?.(nextValue);
    }, []);

    const datasource = useMemo(() => {
        if (rowModelType !== "infinite" || !fetchRows) {
            return undefined;
        }

        return {
            getRows: async (params: {
                startRow: number;
                endRow: number;
                sortModel: unknown;
                filterModel: unknown;
                successCallback: (rows: TData[], lastRow?: number) => void;
                failCallback: () => void;
            }) => {
                try {
                    const { startRow, endRow, sortModel, filterModel } = params;
                    const result = await fetchRows({ startRow, endRow, sortModel, filterModel });
                    const lastRow = typeof result.total === "number" ? result.total : undefined;
                    params.successCallback(result.rows, lastRow);

                    if (result.total === 0) {
                        gridApiRef.current?.showNoRowsOverlay();
                    } else {
                        gridApiRef.current?.hideOverlay();
                    }
                } catch (error) {
                    console.error("Infinite datasource getRows failed", error);
                    params.failCallback?.();
                    gridApiRef.current?.showNoRowsOverlay();
                }
            }
        };
    }, [fetchRows, rowModelType]);

    const onGridReady = useCallback(
        (event: GridReadyEvent<TData>) => {
            gridApiRef.current = event.api;

            if (quickFilterText) {
                applyQuickFilter(event.api, quickFilterText);
            }

            onApiReady?.(event.api);
            event.api.resetColumnState(); // Force reset to clear stale overrides (e.g. ghost checkboxes)
            event.api.sizeColumnsToFit();
        },
        [applyQuickFilter, onApiReady, quickFilterText]
    );

    useEffect(() => {
        if (gridApiRef.current) {
            applyQuickFilter(gridApiRef.current, quickFilterText);
        }
    }, [applyQuickFilter, quickFilterText]);

    // Force refresh grid when language changes
    useEffect(() => {
        if (gridApiRef.current) {
            gridApiRef.current.refreshHeader();
            gridApiRef.current.redrawRows();
        }
    }, [i18n.language]);

    // Sync custom pagination state to AgGrid
    useEffect(() => {
        if (gridApiRef.current && enableNativePagination) {
            const apiPage = gridApiRef.current.paginationGetCurrentPage() + 1;
            if (apiPage !== currentPage) {
                gridApiRef.current.paginationGoToPage(currentPage - 1);
            }
        }
    }, [currentPage, enableNativePagination]);

    useEffect(() => {
        if (gridApiRef.current && enableNativePagination) {
            const apiLimit = gridApiRef.current.paginationGetPageSize();
            if (apiLimit !== currentLimit) {
                gridApiRef.current.setGridOption("paginationPageSize", currentLimit);
            }
        }
    }, [currentLimit, enableNativePagination]);

    const handleSelectionChanged = useCallback(() => {
        if (!onSelectionChange || !gridApiRef.current) {
            return;
        }

        const selectedRows = gridApiRef.current.getSelectedRows() as TData[];
        onSelectionChange(selectedRows);
    }, [onSelectionChange]);

    const handleExportCsv = useCallback(() => {
        const api = gridApiRef.current;

        if (!api) {
            pushToast(t('admin.grid.noExport'), t('admin.grid.noExportDesc'), "warning");
            return;
        }

        try {
            api.exportDataAsCsv();
            pushToast(t('admin.grid.exportCsv'), t('admin.grid.exportPrep'));
        } catch (error) {
            console.error("CSV export failed", error);
            pushToast(t('admin.grid.noExport'), "An error occurred during export. Please try again.", "error");
        }
    }, [pushToast]);





    const [contextMenuState, setContextMenuState] = useState<{
        visible: boolean;
        x: number;
        y: number;
        value: string;
        rowData: TData | null;
        columnId: string | null;
        headerName: string | null;
    }>({ visible: false, x: 0, y: 0, value: "", rowData: null, columnId: null, headerName: null });

    const hideContextMenu = useCallback(() => {
        setContextMenuState(state => (state.visible ? { ...state, visible: false } : state));
        setOpenSubmenuKey(null);
        setActiveItemKey(null);
    }, []);

    useEffect(() => {
        if (!enableContextMenu || !contextMenuState.visible) {
            return;
        }

        const handleClick = () => hideContextMenu();
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                hideContextMenu();
            }
        };

        document.addEventListener("click", handleClick);
        document.addEventListener("contextmenu", handleClick);
        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("click", handleClick);
            document.removeEventListener("contextmenu", handleClick);
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [contextMenuState.visible, enableContextMenu, hideContextMenu]);

    const handleCopy = useCallback(
        async (value: string, successMessage?: string) => {
            const text = value ?? "";
            const fallbackCopy = () => {
                const textarea = document.createElement("textarea");
                textarea.value = text;
                textarea.style.position = "fixed";
                textarea.style.top = "-9999px";
                document.body.appendChild(textarea);

                try {
                    textarea.focus();
                    textarea.select();
                    return document.execCommand("copy");
                } catch (fallbackError) {
                    console.error("Textarea copy fallback failed", fallbackError);
                    return false;
                } finally {
                    document.body.removeChild(textarea);
                }
            };

            let copied = false;

            try {
                if (navigator.clipboard?.writeText) {
                    await navigator.clipboard.writeText(text);
                    copied = true;
                } else {
                    copied = fallbackCopy();
                }
            } catch (error) {
                console.error("Clipboard copy failed", error);
                copied = fallbackCopy();
            }

            if (copied) {
                pushToast(t('admin.grid.copyCell'), successMessage ?? t('admin.grid.copyCell'));
            } else {
                pushToast(t('admin.grid.noExport'), "An error occurred during copy. Please try again.", "error");
            }
        },
        [pushToast]
    );

    const handleCopyRowJson = useCallback(async () => {
        const rowData = contextMenuState.rowData;
        if (!rowData) {
            pushToast("Không có dữ liệu", "Không tìm thấy bản ghi để sao chép.", "warning");
            return;
        }

        const formatted = JSON.stringify(rowData, null, 2);
        await handleCopy(formatted, t('admin.grid.copyRow'));
    }, [contextMenuState.rowData, handleCopy, pushToast, t]);

    const handleCopyWithHeader = useCallback(async () => {
        const headerLabel = contextMenuState.headerName ?? contextMenuState.columnId ?? "Cột";
        const text = `${headerLabel}\n${contextMenuState.value}`;
        await handleCopy(text, "Ô dữ liệu và tiêu đề đã được sao chép.");
    }, [contextMenuState, handleCopy]);

    const handleCopyWithGroupHeaders = useCallback(async () => {
        const headerLabel = contextMenuState.headerName ?? contextMenuState.columnId ?? "Cột";
        const text = `Nhóm > ${headerLabel}\n${contextMenuState.value}`;
        await handleCopy(text, "Ô dữ liệu cùng nhóm tiêu đề đã được sao chép.");
    }, [contextMenuState, handleCopy]);

    const exportItems = useMemo<ContextMenuEntry[]>(
        () => [
            {
                type: "item",
                key: "export-csv",
                label: t('admin.grid.exportCsv'),
                action: handleExportCsv,
                icon: "export"
            },
            {
                type: "item",
                key: "export-xlsx",
                label: "Excel (.xlsx)",
                disabled: true,
                icon: "export"
            },
            {
                type: "item",
                key: "export-xml",
                label: "Excel (.xml)",
                disabled: true,
                icon: "export"
            },
            {
                type: "separator",
                key: "export-separator"
            },
            {
                type: "item",
                key: "export-copy-row-json",
                label: t('admin.grid.copyRow'),
                action: handleCopyRowJson,
                icon: "clipboard"
            }
        ],
        [handleCopyRowJson, handleExportCsv]
    );

    const contextMenuItems = useMemo<ContextMenuEntry[]>(
        () => [
            {
                type: "item",
                key: "copy",
                label: "Sao chép",
                action: () => handleCopy(contextMenuState.value, "Ô dữ liệu đã được sao chép."),
                shortcut: "Ctrl+C",
                icon: "copy"
            },
            {
                type: "item",
                key: "copy-with-headers",
                label: "Sao chép kèm tiêu đề",
                action: handleCopyWithHeader,
                icon: "copy-header"
            },
            {
                type: "item",
                key: "copy-with-group-headers",
                label: "Sao chép kèm nhóm tiêu đề",
                action: handleCopyWithGroupHeaders,
                icon: "copy-header"
            },
            {
                type: "item",
                key: "export",
                label: "Xuất dữ liệu",
                submenu: exportItems,
                icon: "export"
            }
        ],
        [contextMenuState.value, exportItems, handleCopy, handleCopyWithGroupHeaders, handleCopyWithHeader]
    );




    useEffect(() => {
        if (!gridApiRef.current) return;

        if (loading) {
            gridApiRef.current.showLoadingOverlay();
        } else {
            gridApiRef.current.hideOverlay();
        }
    }, [loading]);

    const contextMenuPortal = enableContextMenu && contextMenuState.visible
        ? createPortal(
            <div
                role="menu"
                className={`${withPrefix("context-menu")} ${isDark ? 'bg-[#1e293b] text-slate-200 border border-slate-700' : 'bg-white text-gray-700 border border-gray-200'}`}
                style={{
                    position: "fixed",
                    top: contextMenuState.y,
                    left: contextMenuState.x,
                    zIndex: 2000,
                    minWidth: 240
                }}
            >
                <div className={withPrefix("context-menu-list")}>
                    {contextMenuItems.map(entry => {
                        if (entry.type === "separator") {
                            return <div key={entry.key} className={withPrefix("context-menu-separator")} />;
                        }

                        const { key, label, shortcut, disabled, submenu, icon = "blank" } = entry;
                        const isOpen = openSubmenuKey === key;
                        const isActive = activeItemKey === key;
                        const itemClass = [
                            withPrefix("context-menu-item"),
                            disabled ? "is-disabled" : "",
                            submenu ? "has-submenu" : "",
                            isOpen ? "is-open" : "",
                            isActive ? "is-active" : ""
                        ]
                            .filter(Boolean)
                            .join(" ");

                        const iconNode = renderContextMenuIcon(icon);

                        return (
                            <div
                                key={key}
                                role="menuitem"
                                className={itemClass}
                                tabIndex={disabled ? -1 : 0}
                                onMouseEnter={() => {
                                    if (!disabled) {
                                        setActiveItemKey(key);
                                    }
                                    if (!submenu) {
                                        setOpenSubmenuKey(null);
                                    } else {
                                        setOpenSubmenuKey(key);
                                    }
                                }}
                                onClick={event => {
                                    event.preventDefault();
                                    event.stopPropagation();

                                    if (disabled) {
                                        return;
                                    }

                                    if (submenu) {
                                        setOpenSubmenuKey(key);
                                        return;
                                    }

                                    Promise.resolve(entry.action?.())
                                        .catch(error => {
                                            console.error("Context menu action failed", error);
                                            pushToast("Lỗi thao tác", "Không thể thực hiện hành động vừa chọn.", "error");
                                        })
                                        .finally(() => {
                                            hideContextMenu();
                                        });
                                }}
                                onKeyDown={event => {
                                    if (event.key === "Enter" || event.key === " ") {
                                        event.preventDefault();
                                        event.stopPropagation();
                                        if (disabled) {
                                            return;
                                        }

                                        if (submenu) {
                                            setOpenSubmenuKey(key);
                                            return;
                                        }

                                        Promise.resolve(entry.action?.()).finally(() => {
                                            hideContextMenu();
                                        });
                                    }
                                }}
                            >
                                <span
                                    className={withPrefix("context-menu-item-icon")}
                                    data-empty={iconNode ? "false" : "true"}
                                >
                                    {iconNode}
                                </span>
                                <span className={withPrefix("context-menu-item-label")}>{label}</span>
                                <span className={withPrefix("context-menu-shortcut")}>{shortcut ?? null}</span>
                                {submenu ? <span className={withPrefix("context-menu-submenu-arrow")}>›</span> : null}
                                {submenu && isOpen ? (
                                    <div className={withPrefix("context-menu-submenu")}>
                                        {submenu.map(sub => {
                                            if (sub.type === "separator") {
                                                return <div key={sub.key} className={withPrefix("context-menu-separator")} />;
                                            }

                                            const subDisabled = sub.disabled ?? false;

                                            const subIcon = sub.icon ?? "blank";
                                            const subIconNode = renderContextMenuIcon(subIcon);

                                            return (
                                                <div
                                                    key={sub.key}
                                                    role="menuitem"
                                                    className={`${withPrefix("context-menu-item")} ${subDisabled ? "is-disabled" : ""}`}
                                                    tabIndex={subDisabled ? -1 : 0}
                                                    onClick={event => {
                                                        event.preventDefault();
                                                        event.stopPropagation();

                                                        if (subDisabled) {
                                                            return;
                                                        }

                                                        Promise.resolve(sub.action?.())
                                                            .catch(error => {
                                                                console.error("Submenu action failed", error);
                                                                pushToast("Lỗi thao tác", "Không thể thực hiện hành động vừa chọn.", "error");
                                                            })
                                                            .finally(() => {
                                                                hideContextMenu();
                                                            });
                                                    }}
                                                    onMouseEnter={() => {
                                                        if (!subDisabled) {
                                                            setActiveItemKey(sub.key);
                                                        }
                                                    }}
                                                    onKeyDown={event => {
                                                        if (event.key === "Enter" || event.key === " ") {
                                                            event.preventDefault();
                                                            event.stopPropagation();

                                                            if (subDisabled) {
                                                                return;
                                                            }

                                                            Promise.resolve(sub.action?.())
                                                                .catch(error => {
                                                                    console.error("Submenu action failed", error);
                                                                    pushToast("Lỗi thao tác", "Không thể thực hiện hành động vừa chọn.", "error");
                                                                })
                                                                .finally(() => {
                                                                    hideContextMenu();
                                                                });
                                                        }
                                                    }}
                                                >
                                                    <span
                                                        className={withPrefix("context-menu-item-icon")}
                                                        data-empty={subIconNode ? "false" : "true"}
                                                    >
                                                        {subIconNode}
                                                    </span>
                                                    <span className={withPrefix("context-menu-item-label")}>{sub.label}</span>
                                                    <span className={withPrefix("context-menu-shortcut")}>{sub.shortcut ?? null}</span>
                                                </div>
                                            );
                                        })}
                                    </div>
                                ) : null}
                            </div>
                        );
                    })}
                </div>
            </div>,
            document.body
        )
        : null;

    const resolvedHeight = gridHeight ?? undefined;

    return (
        <>
            <div
                className={`${resolvedPanelClass} !flex !flex-col !min-h-0 ${isDark ? '!bg-[#030816] !border-slate-800' : '!bg-white !border-gray-200'} !rounded-sm !shadow-sm !overflow-hidden !m-1`}
                style={resolvedHeight ? { height: resolvedHeight, flex: 'none' } : { flex: '1' }}
            >
                <div
                    ref={gridContainerRef}
                    className={`${gridClass}`}
                    data-testid="data-table-grid"
                    style={{
                        border: 'none',
                        flex: '1',
                        minHeight: 0,
                    }}
                    onContextMenu={event => {
                        event.preventDefault();
                        if (!enableContextMenu) {
                            hideContextMenu();
                        }
                    }}
                >
                    <AgGridReact<TData>
                        ref={gridRef}
                        rowData={rowModelType === "infinite" ? undefined : data}
                        pinnedTopRowData={pinnedTopRowData}
                        columnDefs={columnDefs}
                        selectionColumnDef={{
                            width: 50,
                            minWidth: 50,
                            maxWidth: 50,
                            suppressSizeToFit: true,
                            pinned: 'left',
                            sortable: false,
                            resizable: false,
                            cellClass: '!flex !items-center !justify-center',
                            headerClass: '!flex !items-center !justify-center'
                        }}
                        defaultColDef={defaultColDef}
                        headerHeight={44}
                        rowHeight={52}
                        getRowId={getRowId}
                        rowModelType={rowModelType === "infinite" ? "infinite" : undefined}
                        datasource={datasource}
                        cacheBlockSize={rowModelType === "infinite" ? cacheBlockSize : undefined}
                        maxBlocksInCache={rowModelType === "infinite" ? maxBlocksInCache : undefined}
                        cacheQuickFilter
                        rowSelection={resolvedRowSelection}
                        enableCellTextSelection
                        animateRows
                        undoRedoCellEditing
                        undoRedoCellEditingLimit={50}
                        rowDragManaged={hasRowDragColumn}
                        pagination={enableNativePagination || rowModelType === "infinite"}
                        paginationPageSize={currentLimit}
                        paginationPageSizeSelector={limitOptions}
                        suppressPaginationPanel={!(enableNativePagination || rowModelType === "infinite")}
                        theme={isDark ? themeQuartzDarkMode : themeQuartz}
                        multiSortKey="ctrl"
                        maintainColumnOrder
                        preventDefaultOnContextMenu
                        treeData={treeData}
                        getDataPath={getDataPath}
                        autoGroupColumnDef={autoGroupColumnDef}
                        groupDefaultExpanded={groupDefaultExpanded}
                        localeText={useMemo(() => getAgGridLocale(t), [t])}
                        onPaginationChanged={event => {
                            if (!event.api || !enableNativePagination) return;
                            
                            // Get current api state
                            const apiPage = event.api.paginationGetCurrentPage() + 1;
                            const apiLimit = event.api.paginationGetPageSize();
                            
                            // Notify parent if relevant
                            if (apiPage !== currentPage) {
                                onChangePage?.(apiPage);
                            }
                            if (apiLimit !== currentLimit) {
                                onChangeLimit?.(apiLimit);
                            }
                        }}
                        onGridReady={onGridReady}
                        overlayNoRowsTemplate={emptyText ? `<span class="text-gray-400">${emptyText}</span>` : undefined}
                        onFirstDataRendered={() => gridApiRef.current?.sizeColumnsToFit()}
                        onSelectionChanged={handleSelectionChanged}
                        onSortChanged={event => {
                            if (onSortColumn) {
                                const columnState = event.api.getColumnState();
                                const sortedColumn = columnState.find(s => s.sort != null);
                                if (sortedColumn) {
                                    onSortColumn(sortedColumn.colId, sortedColumn.sort as 'asc' | 'desc');
                                }
                            }
                        }}
                        onCellClicked={event => {
                            if (onCellClicked && event.data) {
                                const colKey = event.column?.getColId?.() ?? event.colDef?.field ?? "";
                                onCellClicked(event.data as TData, colKey);
                            }
                        }}
                        onCellContextMenu={event => {
                            const domEvent = event.event;

                            if (!(domEvent instanceof MouseEvent)) {
                                return;
                            }

                            domEvent.preventDefault();

                            if (!enableContextMenu) {
                                hideContextMenu();
                                return;
                            }

                            const api = event.api;
                            const baseRowNode = event.node ?? (typeof event.rowIndex === "number" && api
                                ? api.getDisplayedRowAtIndex(event.rowIndex)
                                : null);
                            const nodeData = (baseRowNode?.data as TData | undefined) ?? (event.data as TData | undefined) ?? null;

                            let rawValue: unknown = event.value;

                            if ((rawValue === undefined || rawValue === null) && baseRowNode && event.column) {
                                try {
                                    const accessor = baseRowNode as unknown as {
                                        getValue?: (column: typeof event.column) => unknown;
                                    };
                                    rawValue = accessor.getValue?.(event.column);
                                } catch (error) {
                                    console.warn("Failed to read value via rowNode.getValue", error);
                                }
                            }

                            if ((rawValue === undefined || rawValue === null) && nodeData && event.column) {
                                const colId = event.column.getColId?.() ?? event.column.getColDef()?.field;
                                if (colId && typeof nodeData === "object" && nodeData !== null) {
                                    rawValue = (nodeData as Record<string, unknown>)[colId];
                                }
                            }

                            const cellValue = rawValue == null ? "" : String(rawValue);
                            const viewportWidth = window.innerWidth;
                            const viewportHeight = window.innerHeight;
                            const menuWidth = 260;
                            const menuHeight = 280;
                            const adjustedX = Math.min(domEvent.clientX, viewportWidth - menuWidth);
                            const adjustedY = Math.min(domEvent.clientY, viewportHeight - menuHeight);
                            const headerName = typeof event.colDef.headerName === "string" ? event.colDef.headerName : null;
                            const columnId = event.column?.getColId?.() ?? event.colDef.field ?? null;

                            setContextMenuState({
                                visible: true,
                                x: Math.max(adjustedX, 0),
                                y: Math.max(adjustedY, 0),
                                value: cellValue,
                                rowData: nodeData,
                                columnId,
                                headerName
                            });
                            setOpenSubmenuKey(null);
                            setActiveItemKey("copy");
                        }}
                    />
                    
                    {loading && (
    <div
        className={`
            absolute inset-0 z-[10]
            flex items-center justify-center
            backdrop-blur-[1px]
            ${isDark ? 'bg-[#030816]/45' : 'bg-white/45'}
        `}
    >
        <div
            className={`
                flex items-center gap-2.5
                px-5 py-3 rounded-xl
                border
                animate-in fade-in zoom-in duration-200
                ${isDark
                    ? 'bg-slate-900/90 border-slate-800'
                    : 'bg-white/95 border-slate-200'
                }
            `}
        >
            <div
                className={`
                    w-7 h-7 rounded-full flex-shrink-0
                    border-[2.5px] border-transparent
                    border-t-blue-500 border-r-blue-500
                    animate-spin
                `}
            />
            <span
                className={`
                    text-[13px] font-medium
                    ${isDark ? 'text-slate-200' : 'text-gray-700'}
                `}
            >
                {t('admin.grid.loading', 'Đang tải dữ liệu...')}
            </span>
        </div>
    </div>
)}

                </div>

                {hasPagination && !enableNativePagination && (
                    <div
                        className="!flex !items-center !justify-between !px-4 !py-2.5 !flex-none !text-[12px] !border-t"
                        style={{
                            background: isDark ? '#0b1120' : '#ffffff',
                            borderColor: isDark ? '#1e293b' : '#f1f5f9',
                            color: isDark ? '#cbd5e1' : '#4b5563',
                        }}
                    >
                        <div className="!flex !items-center !gap-4">
                            <div className="!flex !items-center !gap-2">
                                <span style={{ color: isDark ? '#64748b' : '#9ca3af' }}>{t('admin.grid.rowsPerPage')}:</span>
                                <select
                                    style={{ background: 'transparent', border: 'none', outline: 'none', fontWeight: 600, color: isDark ? '#cbd5e1' : '#374151', cursor: 'pointer' }}
                                    value={currentLimit}
                                    onChange={(e) => onChangeLimit?.(Number(e.target.value))}
                                >
                                    {resolvedLimitOptions.map(opt => (
                                        <option key={opt} value={opt} style={{ background: isDark ? '#1e293b' : '#ffffff' }}>{opt}</option>
                                    ))}
                                </select>
                            </div>
                            <div style={{ width: '1px', height: '16px', background: isDark ? '#1e293b' : '#e5e7eb' }} />
                            <div className="!flex !items-center !gap-1">
                                <span>{t('admin.grid.display')}</span>
                                <span style={{ fontWeight: 700, color: isDark ? '#e2e8f0' : '#111827' }}>{startItem} {t('admin.grid.to')} {endItem}</span>
                                <span>{t('admin.grid.of')}</span>
                                <span style={{ fontWeight: 700, color: isDark ? '#e2e8f0' : '#111827' }}>{total}</span>
                            </div>
                        </div>

                        <div className="!flex !items-center !gap-3">
                            <div
                                className="!flex !items-center !rounded-md !overflow-hidden"
                                style={{ border: `1px solid ${isDark ? '#1e293b' : '#e5e7eb'}`, background: isDark ? '#1e293b' : '#f9fafb' }}
                            >
                                <button
                                    onClick={() => onChangePage?.(1)}
                                    disabled={currentPage <= 1}
                                    className="disabled:!opacity-30 disabled:!cursor-not-allowed !transition-colors !text-lg !leading-none !flex !items-center !justify-center"
                                    style={{ width: '32px', height: '32px', borderRight: `1px solid ${isDark ? '#334155' : '#e5e7eb'}`, color: isDark ? '#94a3b8' : '#374151' }}
                                    title={t('admin.grid.first')}
                                >
                                    «
                                </button>
                                <button
                                    onClick={() => onChangePage?.(currentPage - 1)}
                                    disabled={currentPage <= 1}
                                    className="disabled:!opacity-30 disabled:!cursor-not-allowed !transition-colors !text-lg !leading-none !flex !items-center !justify-center"
                                    style={{ width: '32px', height: '32px', borderRight: `1px solid ${isDark ? '#334155' : '#e5e7eb'}`, color: isDark ? '#94a3b8' : '#374151' }}
                                    title={t('admin.grid.previous')}
                                >
                                    ‹
                                </button>
                                <div
                                    className="!px-3 !font-medium !flex !items-center !justify-center"
                                    style={{ height: '32px', borderRight: `1px solid ${isDark ? '#334155' : '#e5e7eb'}`, background: isDark ? '#0f172a' : '#ffffff' }}
                                >
                                    <span style={{ color: isDark ? '#64748b' : '#9ca3af' }}>{t('admin.grid.page')} </span>
                                    <span style={{ color: '#3b82f6', fontWeight: 700, margin: '0 4px' }}>{currentPage}</span>
                                    <span style={{ color: isDark ? '#64748b' : '#9ca3af' }}> / {totalPages}</span>
                                </div>
                                <button
                                    onClick={() => onChangePage?.(currentPage + 1)}
                                    disabled={currentPage >= totalPages}
                                    className="disabled:!opacity-30 disabled:!cursor-not-allowed !transition-colors !text-lg !leading-none !flex !items-center !justify-center"
                                    style={{ width: '32px', height: '32px', borderRight: `1px solid ${isDark ? '#334155' : '#e5e7eb'}`, color: isDark ? '#94a3b8' : '#374151' }}
                                    title={t('admin.grid.next')}
                                >
                                    ›
                                </button>
                                <button
                                    onClick={() => onChangePage?.(totalPages)}
                                    disabled={currentPage >= totalPages}
                                    className="disabled:!opacity-30 disabled:!cursor-not-allowed !transition-colors !text-lg !leading-none !flex !items-center !justify-center"
                                    style={{ width: '32px', height: '32px', color: isDark ? '#94a3b8' : '#374151' }}
                                    title={t('admin.grid.last')}
                                >
                                    »
                                </button>
                            </div>
                        </div>
                    </div>
                )}
                {contextMenuPortal}
            </div>
        </>
    );
};

export default DataTable;
