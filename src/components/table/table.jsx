import React from 'react';
import styled from 'styled-components';
import info from '../../assets/info.svg';
import checkmark from '../../assets/checkmark.svg';
import closemark from '../../assets/closemark.svg';

const TableContainer = styled.div`
  min-width: 775px
`;

const TableRow = styled.div`
  width: 100%;
  border-top: 1.5px solid #E2EAF0;
  display: flex;
  justify-content: space-between
`;

const RowTitleCell = styled.div`
  width: 319px;
  padding: 16px 80px 16px 13px;
  position: relative;
  text-align: left;
  color: ${props => (props.bold ? '#1079DD' : '#3C3C3C')};
  font-weight: ${props => (props.bold ? 800 : 400)};
`;

const InfoImg = styled.img`
  width: 20px;
  height: 18px;
  position: absolute;
  right: 56px;
`;

const TypeImg = styled.img`
  width: 20px;
  height: 18px;
`;

const RowType = styled.div`
  font-weight: 800;
  font-size: 14px;
  line-height: 19px;
  width: 228px;
  border-left: 1.5px solid #E2EAF0;
  padding-top: 16px;
  padding-bottom: 16px;
  color: ${props => (props.important ? '#0D88E3' : '#CFD6DB')};
`;

export default function CustomTable({ tableData }) {
  return (
    <TableContainer>
      {tableData.map((rowData, index) => (
        <TableRow key={`row-data-${index}`}>
          <RowTitleCell bold={rowData.important}>
            {rowData.title}
            <InfoImg src={info} />
          </RowTitleCell>
          <RowType important={rowData.typeA !== 'NEVER' ? true : false}>
            {rowData.typeA === 'CHECKED' ? 
              <TypeImg src={checkmark} alt='checked' /> 
              : (rowData.typeA === 'UNCHECKED' ? <TypeImg src={closemark} alt='closemark' /> : rowData.typeA)
            }
          </RowType>
          <RowType important={rowData.typeA !== 'NEVER' ? true : false}>
            {rowData.typeB === 'CHECKED' ? 
              <TypeImg src={checkmark} alt='checked' /> 
              : (rowData.typeB === 'UNCHECKED' ? <TypeImg src={closemark} alt='closemark' /> : rowData.typeB)
            }
          </RowType>
        </TableRow>
      ))}
    </TableContainer>
  );
}
