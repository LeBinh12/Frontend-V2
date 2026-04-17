"use client";

import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import { AllCommunityModule, ModuleRegistry, ColDef } from 'ag-grid-community';

// Core Grid CSS
import 'ag-grid-community/styles/ag-grid.css';
// Theme CSS
import 'ag-grid-community/styles/ag-theme-quartz.css';

// Register all community modules
ModuleRegistry.registerModules([AllCommunityModule]);

interface AdminDataTableProps {
  rowData: any[];
  columnDefs: ColDef[];
  searchQuery?: string;
  isDark: boolean;
  height?: string;
  rowHeight?: number;
}

export default function AdminDataTable({
  rowData,
  columnDefs,
  searchQuery = '',
  isDark,
  height = 'calc(100vh - 200px)',
  rowHeight = 50
}: AdminDataTableProps) {
  return (
    <div className="w-full flex-1 min-h-0 p-1">
      <div 
        className={`w-full h-full rounded-sm border overflow-hidden ${isDark ? 'ag-theme-quartz-dark' : 'ag-theme-quartz'}`}
        style={{ 
          height: height,
          '--ag-border-radius': '2px',
          '--ag-background-color': isDark ? '#030816' : '#ffffff',
          '--ag-header-background-color': isDark ? '#090e1f' : '#f8fafc',
          '--ag-row-hover-color': isDark ? '#1e293b40' : '#f1f5f9',
          '--ag-selected-row-color': isDark ? '#1e293b80' : '#e2e8f0',
          '--ag-border-color': isDark ? '#1e293b' : '#e2e8f0',
          '--ag-foreground-color': isDark ? '#cbd5e1' : '#334155',
          '--ag-header-foreground-color': isDark ? '#94a3b8' : '#64748b',
          '--ag-font-size': '13px',
          '--ag-font-family': "'Inter', sans-serif",
        } as React.CSSProperties}
      >
        <AgGridReact
          rowData={rowData}
          columnDefs={columnDefs}
          defaultColDef={{
            sortable: true,
            filter: true,
            resizable: true,
            flex: 1,
            minWidth: 100,
          }}
          pagination={true}
          paginationPageSize={20}
          paginationPageSizeSelector={[10, 20, 50, 100]}
          quickFilterText={searchQuery}
          rowHeight={rowHeight}
          headerHeight={40}
        />
      </div>

      <style jsx global>{`
        .ag-root-wrapper {
          border: none !important;
        }
        .ag-cell {
          display: flex;
          align-items: center;
        }
        /* Custom scrollbar for the grid */
        .ag-body-viewport {
          scrollbar-width: thin;
          scrollbar-color: ${isDark ? '#1e293b #030816' : '#e2e8f0 #ffffff'};
        }
      `}</style>
    </div>
  );
}
