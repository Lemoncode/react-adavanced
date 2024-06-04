import React from "react";
import { monitorForElements } from "@atlaskit/pragmatic-drag-and-drop/element/adapter";
import { CardContent, KanbanContent, createDefaultKanbanContent } from "./model";
import { loadKanbanContent } from "./api";
import { moveCard } from "./kanban.container.business";
import { Column } from "./components";
import classes from "./kanban.container.module.css";

export const KanbanContainer: React.FC = () => {
  const [kanbanContent, setKanbanContent] = React.useState<KanbanContent>(
    createDefaultKanbanContent()
  );

  React.useEffect(() => {
    loadKanbanContent().then((content) => setKanbanContent(content));
  }, []);

  React.useEffect(() => {
    return monitorForElements({
      onDrop({ source, location }) {
        const destination = location.current.dropTargets[0];
        if (!destination) {
          // si se suelta fuera de cualquier target
          return;
        }

        const card = source.data.card as CardContent;
        const columnId = destination.data.columnId as number;

        // También aquí nos aseguramos de que estamos trabajando con el último estado
        setKanbanContent((kanbanContent) =>
          moveCard(card, columnId, kanbanContent)
        );
      },
    });
  }, [kanbanContent]);

  return (
    <div className={classes.container}>
      {kanbanContent.columns.map((column) => (
        <Column
          key={column.id}
          name={column.name}
          content={column.content}
          columnId={column.id}
        />
      ))}
    </div>
  );
};
