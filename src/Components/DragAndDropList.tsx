// DraggableList.tsx
import React, { Component } from "react";
import { DragDropContext, Droppable, Draggable, DropResult, DraggableProvided, DraggableStateSnapshot, DroppableProvided, DroppableStateSnapshot } from "react-beautiful-dnd";
// import { InputBox } from "./Utils";

interface Item {
    id: string;
    content: string;
}

interface DraggableListProps {
    items: string[];
    setItems: (items: string[]) => void;
}

const reorder = (list: string[], startIndex: number, endIndex: number): string[] => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};

const grid = 8;

const getItemStyle = (isDragging: boolean, draggableStyle: React.CSSProperties | undefined): React.CSSProperties => ({
    display: "flex",
    flexDirection: "row",
    userSelect: "none",
    padding: grid * 2,
    margin: `0 0 ${grid}px 0`,
    background: isDragging ? "lightgreen" : "grey",
    ...draggableStyle
});

const getListStyle = (isDraggingOver: boolean): React.CSSProperties => ({
    background: isDraggingOver ? "lightblue" : "lightgrey",
    padding: grid,
    width: 250
});

const getTrashStyle = (isDraggingOver: boolean): React.CSSProperties => ({
    background: isDraggingOver ? "red" : "pink",
    padding: grid,
    width: 250,
    minHeight: 50,
    textAlign: 'center',
    lineHeight: '50px'
});

const getCreatorStyle = (isDraggingOver: boolean): React.CSSProperties => ({
    background: isDraggingOver ? "green" : "lightgreen",
    padding: grid,
    width: 250,
    minHeight: 50,
    textAlign: 'center',
    lineHeight: '50px'
});

function setArrayValue(new_content: string, items: string[], index: number) {
    const new_items = Array.from(items);
    new_items[index] = new_content;
    return new_items;
}

export class DraggableList extends Component<DraggableListProps> {
    constructor(props: DraggableListProps) {
        super(props);
        this.state = {
            creatorItems: ["Initial Creator Item"]
        };
    }

    onDragEnd = (result: DropResult): void => {
        if (!result.destination) {
            return;
        }

        if (result.destination.droppableId === "droppable") {
            const newOrder = reorder(
                this.props.items,
                result.source.index,
                result.destination.index
            );

            this.props.setItems(newOrder);
        } else if (result.destination.droppableId === "trash" || result.destination.droppableId === "creator") {
            const remainingItems = Array.from(this.props.items);
            remainingItems.splice(result.source.index, 1);
            this.props.setItems(remainingItems);
        }
        // else if (result.source.droppableId === "creator") { }
    };

    render() {
        const items = this.props.items.map((content, index) => ({
            id: `item-${index}`,
            content
        }));

        // const [newItem, setNewItem] = useState("new item");


        return (
            <DragDropContext onDragEnd={this.onDragEnd}>
                <div style={{ display: 'flex', alignItems: 'flex-start' }}>

                    <Droppable droppableId="droppable">
                        {(provided: DroppableProvided, snapshot: DroppableStateSnapshot) => (
                            <div
                                {...provided.droppableProps}
                                ref={provided.innerRef}
                                style={getListStyle(snapshot.isDraggingOver)}
                            >
                                {items.map((item, index) => (
                                    <Draggable key={item.id} draggableId={item.id} index={index}>
                                        {(provided: DraggableProvided, snapshot: DraggableStateSnapshot) => (
                                            <div
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                                style={getItemStyle(
                                                    snapshot.isDragging,
                                                    provided.draggableProps.style
                                                )}

                                            >
                                                <div style={{ flex: 5 }}>{item.content} </div>
                                                <button onClick={() => this.props.setItems(setArrayValue("updated!", this.props.items, index))} style={{ flex: 1, height: "40px", width: "40px", background: "green", margin: "1px0 0 0 0" }}>U</button>
                                            </div>
                                        )}
                                    </Draggable>
                                ))}
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                    <div>
                        <Droppable droppableId="creator">
                            {(provided: DroppableProvided, snapshot: DroppableStateSnapshot) => (
                                <div
                                    {...provided.droppableProps}
                                    ref={provided.innerRef}
                                    style={getCreatorStyle(snapshot.isDraggingOver)}
                                >
                                    {"Create new item"}
                                    <Draggable key={"test"} draggableId={"test"} index={99}>
                                        {(provided: DraggableProvided, snapshot: DraggableStateSnapshot) => (
                                            <div
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                                style={getItemStyle(
                                                    snapshot.isDragging,
                                                    provided.draggableProps.style
                                                )}

                                            >
                                                {/* New Item */}
                                                <div style={{ flex: 5 }}>{"New Item"} </div>
                                                {/* <button style={{ flex: 1, height: "40px", width: "40px", background: "green", margin: "1px0 0 0 0" }}>U</button> */}
                                            </div>
                                        )}
                                    </Draggable>
                                </div>
                            )}
                        </Droppable>

                        <Droppable droppableId="trash">
                            {(provided: DroppableProvided, snapshot: DroppableStateSnapshot) => (
                                <div
                                    {...provided.droppableProps}
                                    ref={provided.innerRef}
                                    style={getTrashStyle(snapshot.isDraggingOver)}
                                >
                                    Drag here to delete
                                </div>
                            )}
                        </Droppable>

                    </div>
                </div >
            </DragDropContext >
        );
    }
}
