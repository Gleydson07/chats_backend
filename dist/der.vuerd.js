// src/der.vuerd.json
var canvas = {
  version: "2.2.11",
  width: 2e3,
  height: 2e3,
  scrollTop: 0,
  scrollLeft: 0,
  zoomLevel: 1,
  show: {
    tableComment: true,
    columnComment: true,
    columnDataType: true,
    columnDefault: true,
    columnAutoIncrement: false,
    columnPrimaryKey: true,
    columnUnique: false,
    columnNotNull: true,
    relationship: true
  },
  database: "MySQL",
  databaseName: "chats",
  canvasType: "ERD",
  language: "GraphQL",
  tableCase: "pascalCase",
  columnCase: "camelCase",
  highlightTheme: "VS2015",
  bracketType: "none",
  setting: {
    relationshipDataTypeSync: true,
    relationshipOptimization: false,
    columnOrder: [
      "columnName",
      "columnDataType",
      "columnNotNull",
      "columnUnique",
      "columnAutoIncrement",
      "columnDefault",
      "columnComment"
    ]
  },
  pluginSerializationMap: {}
};
var table = {
  tables: [
    {
      name: "user_roles",
      comment: "",
      columns: [
        {
          name: "id",
          comment: "",
          dataType: "INT",
          default: "",
          option: {
            autoIncrement: true,
            primaryKey: true,
            unique: false,
            notNull: false
          },
          ui: {
            active: false,
            pk: true,
            fk: false,
            pfk: false,
            widthName: 60,
            widthComment: 60,
            widthDataType: 60,
            widthDefault: 60
          },
          id: "281528ff-4927-4b0f-8dd6-c35471490688"
        },
        {
          name: "created_at",
          comment: "",
          dataType: "timestamp",
          default: "",
          option: {
            autoIncrement: false,
            primaryKey: false,
            unique: false,
            notNull: false
          },
          ui: {
            active: false,
            pk: false,
            fk: false,
            pfk: false,
            widthName: 70.67529296875,
            widthComment: 60,
            widthDataType: 67.89501953125,
            widthDefault: 60
          },
          id: "866d0e11-6b04-41df-bb99-b5cf37788ab1"
        },
        {
          name: "updated_at",
          comment: "",
          dataType: "timestamp",
          default: "",
          option: {
            autoIncrement: false,
            primaryKey: false,
            unique: false,
            notNull: false
          },
          ui: {
            active: false,
            pk: false,
            fk: false,
            pfk: false,
            widthName: 60,
            widthComment: 60,
            widthDataType: 60,
            widthDefault: 60
          },
          id: "be9017d1-8062-4dcf-8727-e7db3f742b30"
        }
      ],
      ui: {
        active: false,
        left: 104,
        top: 57,
        zIndex: 26,
        widthName: 64.32763671875,
        widthComment: 60
      },
      visible: true,
      id: "7a5a5e53-a56c-4241-95f1-854600e0c23c"
    },
    {
      name: "users",
      comment: "",
      columns: [
        {
          name: "id",
          comment: "",
          dataType: "INT",
          default: "",
          option: {
            autoIncrement: true,
            primaryKey: true,
            unique: false,
            notNull: false
          },
          ui: {
            active: false,
            pk: true,
            fk: false,
            pfk: false,
            widthName: 60,
            widthComment: 60,
            widthDataType: 60,
            widthDefault: 60
          },
          id: "54f145fe-5e93-4858-831e-66044f913228"
        },
        {
          name: "created_at",
          comment: "",
          dataType: "timestamp",
          default: "",
          option: {
            autoIncrement: false,
            primaryKey: false,
            unique: false,
            notNull: false
          },
          ui: {
            active: false,
            pk: false,
            fk: false,
            pfk: false,
            widthName: 70.67529296875,
            widthComment: 60,
            widthDataType: 67.89501953125,
            widthDefault: 60
          },
          id: "7d31946c-ebff-4203-93d7-cc80f981498d"
        },
        {
          name: "updated_at",
          comment: "",
          dataType: "timestamp",
          default: "",
          option: {
            autoIncrement: false,
            primaryKey: false,
            unique: false,
            notNull: false
          },
          ui: {
            active: false,
            pk: false,
            fk: false,
            pfk: false,
            widthName: 60,
            widthComment: 60,
            widthDataType: 60,
            widthDefault: 60
          },
          id: "23b7e2ad-0d6c-4613-826c-eef65b31dd48"
        }
      ],
      ui: {
        active: false,
        left: 103,
        top: 226,
        zIndex: 28,
        widthName: 60,
        widthComment: 60
      },
      visible: true,
      id: "4d922611-5f5a-4c12-a99b-2798ae34fcb1"
    },
    {
      name: "companies",
      comment: "",
      columns: [
        {
          name: "id",
          comment: "",
          dataType: "INT",
          default: "",
          option: {
            autoIncrement: true,
            primaryKey: true,
            unique: false,
            notNull: false
          },
          ui: {
            active: false,
            pk: true,
            fk: false,
            pfk: false,
            widthName: 60,
            widthComment: 60,
            widthDataType: 60,
            widthDefault: 60
          },
          id: "73387800-8c99-4418-889c-c3a0913eaf66"
        },
        {
          name: "created_at",
          comment: "",
          dataType: "timestamp",
          default: "",
          option: {
            autoIncrement: false,
            primaryKey: false,
            unique: false,
            notNull: false
          },
          ui: {
            active: false,
            pk: false,
            fk: false,
            pfk: false,
            widthName: 70.67529296875,
            widthComment: 60,
            widthDataType: 67.89501953125,
            widthDefault: 60
          },
          id: "993bdfb6-eac3-43a7-94a6-ef80ef02d79a"
        },
        {
          name: "updated_at",
          comment: "",
          dataType: "timestamp",
          default: "",
          option: {
            autoIncrement: false,
            primaryKey: false,
            unique: false,
            notNull: false
          },
          ui: {
            active: false,
            pk: false,
            fk: false,
            pfk: false,
            widthName: 60,
            widthComment: 60,
            widthDataType: 60,
            widthDefault: 60
          },
          id: "35964fa3-dd94-4988-a742-d6f52a3494e6"
        }
      ],
      ui: {
        active: true,
        left: 104,
        top: 393,
        zIndex: 30,
        widthName: 68.498046875,
        widthComment: 60
      },
      visible: true,
      id: "4e9dc3b1-ae1a-4e8b-9607-77c5545995c3"
    }
  ],
  indexes: []
};
var memo = {
  memos: []
};
var relationship = {
  relationships: []
};
var der_vuerd_default = {
  canvas,
  table,
  memo,
  relationship
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  canvas,
  memo,
  relationship,
  table
});
