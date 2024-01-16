import React from 'react';
import { extend } from '@syncfusion/ej2-base';
import {KanbanComponent, ColumnsDirective, ColumnDirective} from '@syncfusion/ej2-react-kanban';
import { kanbanData } from '../data/dummy';
import { Header } from '../components';

const Kanban = () => {
  const data = extend([], kanbanData, null, true);
  return (
    <div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl'>
    <Header category='App' title='Kanban'/>
    <KanbanComponent id="kanban" keyField="Status" dataSource={data} cardSettings={{ contentField: "Summary", headerField: "Id" }}>
        <ColumnsDirective>
          <ColumnDirective headerText="To Do" keyField="Open"/>
          <ColumnDirective headerText="In Progress" keyField="InProgress"/>
          <ColumnDirective headerText="Testing" keyField="Testing"/>
          <ColumnDirective headerText="Done" keyField="Close"/>
        </ColumnsDirective>
    </KanbanComponent>
    </div>
  )
}

export default Kanban