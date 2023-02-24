import React from "react";

// finding the position of the all list items in the list that are rendered
const calculateBoundingElement = (children: any) => {
    const boundingBoxes: any = {};

    React.Children.forEach(children, (child: any) => {
        const domNode = child.ref.current;
        const nodeBoundingBox = domNode.getBoundingClientRect();

        boundingBoxes[child.key] = nodeBoundingBox;
    });

    return boundingBoxes;
};

export default calculateBoundingElement;
