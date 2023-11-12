import { moveCardColumn } from "./kanban.business";

describe("Kanban business", () => {
  test.each([
    [
      "should move card from one column to another",
      {
        columns: [
          {
            id: 1,
            name: "Column A",
            content: [
              {
                id: 1,
                title: "Card 1",
              },
              {
                id: 2,
                title: "Card 2",
              },
            ],
          },
          {
            id: 2,
            name: "Column B",
            content: [
              {
                id: 3,
                title: "Card 3",
              },
            ],
          },
        ],
      },
      {
        columnOriginId: 1,
        columnDestinationId: 2,
        content: {
          id: 1,
          title: "Card 1",
        },
      },
      {
        columns: [
          {
            id: 1,
            name: "Column A",
            content: [
              {
                id: 2,
                title: "Card 2",
              },
            ],
          },
          {
            id: 2,
            name: "Column B",
            content: [
              {
                id: 3,
                title: "Card 3",
              },
              {
                id: 1,
                title: "Card 1",
              },
            ],
          },
        ],
      },
    ],
    [
      "should move card from first column to third column",
      {
        columns: [
          {
            id: 1,
            name: "Column A",
            content: [
              {
                id: 1,
                title: "Card 1",
              },
              {
                id: 2,
                title: "Card 2",
              },
            ],
          },
          {
            id: 2,
            name: "Column B",
            content: [
              {
                id: 3,
                title: "Card 3",
              },
            ],
          },
          {
            id: 3,
            name: "Column C",
            content: [],
          },
        ],
      },
      {
        columnOriginId: 1,
        columnDestinationId: 3,
        content: {
          id: 1,
          title: "Card 1",
        },
      },
      {
        columns: [
          {
            id: 1,
            name: "Column A",
            content: [
              {
                id: 2,
                title: "Card 2",
              },
            ],
          },
          {
            id: 2,
            name: "Column B",
            content: [
              {
                id: 3,
                title: "Card 3",
              },
            ],
          },
          {
            id: 3,
            name: "Column C",
            content: [
              {
                id: 1,
                title: "Card 1",
              },
            ],
          },
        ],
      },
    ],
    [
      "should return same state if destination does not exist",
      {
        columns: [
          {
            id: 1,
            name: "Column A",
            content: [
              {
                id: 1,
                title: "Card 1",
              },
              {
                id: 2,
                title: "Card 2",
              },
            ],
          },
        ],
      },
      {
        columnOriginId: 1,
        columnDestinationId: 2,
        content: {
          id: 1,
          title: "Card 1",
        },
      },
      {
        columns: [
          {
            id: 1,
            name: "Column A",
            content: [
              {
                id: 1,
                title: "Card 1",
              },
              {
                id: 2,
                title: "Card 2",
              },
            ],
          },
        ],
      },
    ],
    [
      "should return same state if origin does not exist",
      {
        columns: [
          {
            id: 1,
            name: "Column A",
            content: [
              {
                id: 1,
                title: "Card 1",
              },
              {
                id: 2,
                title: "Card 2",
              },
            ],
          },
        ],
      },
      {
        columnOriginId: 2,
        columnDestinationId: 1,
        content: {
          id: 1,
          title: "Card 1",
        },
      },
      {
        columns: [
          {
            id: 1,
            name: "Column A",
            content: [
              {
                id: 1,
                title: "Card 1",
              },
              {
                id: 2,
                title: "Card 2",
              },
            ],
          },
        ],
      },
    ],
  ])("%s", (testName, kanbanContent, moveInfo, expectedKanbanContent) => {
    it(testName, () => {
      const newKanbanContent = moveCardColumn(moveInfo, kanbanContent);
      expect(newKanbanContent).toEqual(expectedKanbanContent);
    });
  });
});
