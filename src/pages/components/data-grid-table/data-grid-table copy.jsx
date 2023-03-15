import React from 'react'
import DraggableHeaderRenderer from './header-renderers';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import ReactDataGrid from 'react-data-grid'
import 'react-data-grid/lib/styles.css'
import './data-grid-table.css'

const DataGridTable = (props) => {
	const [rows] = React.useState(props.rows);
  const [columns, setColumns] = React.useState(props.columns);
  const [sortColumns, setSortColumns] = React.useState([]);
	const onSortColumnsChange = React.useCallback((sortColumns) => {
    setSortColumns(sortColumns.slice(-1));
  }, []);

  const draggableColumns = React.useMemo(() => {
    const headerRenderer = (p) => {
      return <DraggableHeaderRenderer {...p} onColumnsReorder={handleColumnsReorder} />;
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

  const handleRowClick = idx => {
    console.log(`Clicked row ${idx}`);
  };

  const handleRowMouseEnter = idx => {
    console.log(`Hovered row ${idx}`);
  };

  const handleRowMouseLeave = idx => {
    console.log(`Left row ${idx}`);
  };

  const RowRenderer = ({ row, idx, onRowClick, onRowMouseEnter, onRowMouseLeave }) => {
    const [isHovered, setIsHovered] = useState(false);
  
    const handleMouseEnter = () => {
      setIsHovered(true);
      onRowMouseEnter(idx);
    };
  
    const handleMouseLeave = () => {
      setIsHovered(false);
      onRowMouseLeave(idx);
    };
  
    return (
      <div
        className={`rdg-row${isHovered ? ' rdg-row-hover' : ''}`}
        onClick={() => onRowClick(idx)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {row.cells.map(cell => (
          <div key={cell.id} className="rdg-cell">
            {cell.formattedValue}
          </div>
        ))}
      </div>
    );
  };

	return (
		<DndProvider backend={HTML5Backend}>
			<ReactDataGrid
				columns={draggableColumns}
				// rows={sortedRows}
        rowGetter={i => sortedRows[i]}
        rowsCount={sortedRows.length}
				sortColumns={sortColumns}
				onSortColumnsChange={onSortColumnsChange}
        
        sortDirection={sortDirection}
        onGridSort={handleGridSort}
				direction={direction}
        rowRenderer={RowRenderer}
        enableCellSelect={false}
        onCellSelected={(rowIdx, colIdx) => {}}
        onRowClick={handleRowClick}
        onRowMouseEnter={handleRowMouseEnter}
        onRowMouseLeave={handleRowMouseLeave}

				defaultColumnOptions={{ resizable: true, sortable: true, filterable: true, editable: false }}
				rowHeight={props.rowHeight || 45}
				headerRowHeight={props.headerRowHeight || 45}
        className="my-grid"
			/>
		</DndProvider>
	)
}

export default DataGridTable