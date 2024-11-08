{
    // Define a union type Circle and Rectangle, where each type has a unique shape property. Create a function calculateShapeArea that uses type guards to calculate the area based on the shape type.

    // Circle Shape Area --> need Radius and PI
    type Circle = {
        shape: 'circle'
        radius: number;
    }

    // Rectangle Shape Area --> need hight and width
    type Rectangle = {
        shape: 'rectangle'
        height: number;
        width: number;
    }

    // union type making
    type Shape = Circle | Rectangle;

    function calculateShapeArea(shapeArea: Shape) {
        if (shapeArea.shape === "circle") {
            const circleArea = Math.PI * shapeArea.radius * shapeArea.radius;
            return circleArea;
        } else if (shapeArea.shape === "rectangle") {
            const rectangleArea = shapeArea.height * shapeArea.width;
            return rectangleArea;
        }
    }

    // value change
    const circle: Circle = { shape: 'circle', radius: 2 }
    const rectangle: Rectangle = { shape: "rectangle", height: 10, width: 6 }

    console.log(calculateShapeArea(circle));
    console.log(calculateShapeArea(rectangle));
}