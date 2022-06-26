import React, { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

import SearchBox from "../../components/muiComponents/SearchBox";
import axios from "axios";

interface Column {
  id: "name" | "code" | "population" | "size" | "density";
  label: string;
  minWidth?: number;
  align?: "right";
  format?: (value: number) => string;
}

interface Headings {
  id: string;
  label: string;
  minWidth: number;
  align?: any;
}

const columns: Headings[] = [
  { id: "name", label: "Name", minWidth: 100 },
  { id: "phone", label: "Phone", minWidth: 100 },
  { id: "quantity", label: "Quantity", minWidth: 170 },
  { id: "plant", label: "Plant", minWidth: 100 },
  { id: "siteAddress", label: "Site Address", minWidth: 100 },
];

interface Data {
  name: string;
  code: string;
  population: number;
  size: number;
  density: number;
}

export default function ClientList(props: any) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [rows, setRows] = useState<any[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/v1/client/")
      .then((response) => {
        const clients = response.data.clients;
        setRows(clients);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div>
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <SearchBox />
        <TableContainer sx={{ maxHeight: 600 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.length &&
                rows
                  // .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row: any) => {
                    const newRow = { ...row, ...row.projectDetails };
                    return (
                      <TableRow
                        onClick={() => {
                          props.clientId(row._id);
                          console.log(row._id);
                          props.setPage("Follow Up");
                        }}
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={newRow.code}
                      >
                        {columns.map((column) => {
                          const value = newRow[column.id];
                          return (
                            <TableCell key={column.id} align={column.align}>
                              {value}
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    );
                  })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
}
