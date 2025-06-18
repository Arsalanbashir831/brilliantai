import React from "react";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";

interface Column<T> {
  header: string;
  accessor: string;
  cell?: (info: { row: T; getValue: () => T[keyof T] }) => React.ReactNode;
}

interface DataTableProps<T extends Record<string, unknown>> {
  columns: Column<T>[];
  data: T[];
}

const DataTable = <T extends Record<string, unknown>>({
  columns,
  data,
}: DataTableProps<T>) => {
  return (
    <div className="w-full overflow-x-auto">
      <div className="min-w-[640px]"> {/* optional: adjust min-width */}
        <Table className="w-full text-sm text-left">
          <TableHeader>
            <TableRow>
              {columns.map((column) => (
                <TableHead key={column.accessor}>{column.header}</TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.length > 0 ? (
              data.map((row, rowIndex) => (
                <TableRow key={rowIndex}>
                  {columns.map((column) => {
                    const rawValue = row[column.accessor] as T[keyof T];
                    const getValue = () => rawValue;
                    return (
                      <TableCell key={column.accessor}>
                        {column.cell
                          ? column.cell({ row, getValue })
                          : String(rawValue ?? "")}
                      </TableCell>
                    );
                  })}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="text-center">
                  No data available.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default DataTable;
