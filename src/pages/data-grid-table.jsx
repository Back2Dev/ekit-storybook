import React from 'react'
import 'react-data-grid/lib/styles.css'
import DataGrid from 'react-data-grid'
import DraggableHeaderRenderer from './header-renderers';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const DataGridComponent = (params) => {
	const [rows] = React.useState(params.rows);
  const [columns, setColumns] = React.useState(params.columns);
  const [sortColumns, setSortColumns] = React.useState([]);
	const onSortColumnsChange = React.useCallback((sortColumns) => {
    setSortColumns(sortColumns.slice(-1));
  }, []);

  const draggableColumns = React.useMemo(() => {
    const headerRenderer = (props) => {
      return <DraggableHeaderRenderer {...props} onColumnsReorder={handleColumnsReorder} />;
    }

    const handleColumnsReorder = (sourceKey, targetKey) => {
      const sourceColumnIndex = columns.findIndex((c) => c.key === sourceKey);
      const targetColumnIndex = columns.findIndex((c) => c.key === targetKey);
      const reorderedColumns = [...columns];

      reorderedColumns.splice(
        targetColumnIndex,
        0,
        reorderedColumns.splice(sourceColumnIndex, 1)[0]
      );

      setColumns(reorderedColumns);
    }

    return columns.map((c) => {
      if (c.key === 'id') return c;
      return { ...c, headerRenderer };
    });
  }, [columns]);

  const sortedRows = React.useMemo(() => {
    if (sortColumns.length === 0) return rows;
    const { columnKey, direction } = sortColumns[0];

    let sortedRows = [...rows];

    switch (columnKey) {
      case 'id':
        sortedRows = sortedRows.sort((a, b) => a[columnKey] - b[columnKey]);
        break;
      case 'name':
        sortedRows = sortedRows.sort((a, b) => a[columnKey].localeCompare(b[columnKey]));
        break;
      case 'company':
        sortedRows = sortedRows.sort((a, b) => a[columnKey].localeCompare(b[columnKey]));
        break;
      case 'role':
        sortedRows = sortedRows.sort((a, b) => a[columnKey].localeCompare(b[columnKey]));
        break;
      case 'pProgress':
        sortedRows = sortedRows.sort((a, b) => a[columnKey] - b[columnKey]);
        break;
      case 'bProgress':
        sortedRows = sortedRows.sort((a, b) => a[columnKey] - b[columnKey]);
        break;
      case 'peers':
        sortedRows = sortedRows.sort((a, b) => a[columnKey] - b[columnKey]);
        break;
			case 'Workshop':
				sortedRows = sortedRows.sort((a, b) => a[columnKey].localeCompare(b[columnKey]));
				break;
			case 'Date':
				sortedRows = sortedRows.sort((a, b) => a[columnKey]-b[columnKey]);
				break;
			case 'Participants':
				sortedRows = sortedRows.sort((a, b) => a[columnKey] - b[columnKey]);
				break;
			case 'Progress':
				sortedRows = sortedRows.sort((a, b) => a[columnKey] - b[columnKey]);
				break;
			case 'Type':
				sortedRows = sortedRows.sort((a, b) => a[columnKey].localeCompare(b[columnKey]));
				break;
      default:
    }
    return direction === 'DESC' ? sortedRows.reverse() : sortedRows;
  }, [rows, sortColumns]);

	const direction = 'ASC';

	return (
		<DndProvider backend={HTML5Backend}>
			<DataGrid
				columns={draggableColumns}
				rows={sortedRows}
				sortColumns={sortColumns}
				onSortColumnsChange={onSortColumnsChange}
				direction={direction}
				defaultColumnOptions={{ resizable: true, sortable: true, filterable: true, editable: false }}

				rowHeight={params.rowHeight || 45}
				headerRowHeight={params.headerRowHeight || 45}

				onCellClick={params.onCellClick}
			/>
		</DndProvider>
	)
}

export default DataGridComponent