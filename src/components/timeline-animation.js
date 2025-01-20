export class Line {
    color;
    x;
    points = [];
    lineIndex = 0;
    getMouse;

    constructor(getMouse, x, color, lineIndex, maxHeight, steps) {
        this.x = x;
        this.color = color;
        this.lineIndex = lineIndex;
        this.getMouse = getMouse;
        for (let i = 50; i < maxHeight + 50; i+=steps) {
            this.points.push(new Point(this.getMouse, x, i));
        }
    }
}
export default class TimelineAnimation {
    mouse = {
        x: 0,
        y: 0
    }
    animationHandle = 0;
    lastTimestamp = 0;
    startYear;
    endYear;
    canvasData = {}
    ctx;

    constructor(canvas, lines, items, canvasData, startYear, endYear) {
        this.canvasData = canvasData;
        this.startYear = startYear;
        this.endYear = endYear;
        this.ctx = canvas.getContext('2d');
        canvas.addEventListener("mousemove", e => {
            if (e.offsetX) {
                this.mouse.x = e.offsetX;
                this.mouse.y = e.offsetY;
            }
            else if (e.layerX) {
                this.mouse.x = e.layerX;
                this.mouse.y = e.layerY;
            }
            else {
                this.mouse.x = e.pageX - $(canvas).offset().left;
                this.mouse.y = e.pageY - $(canvas).offset().top;
            }
        })
        this.lines = lines.map(line => new Line(() => this.getMouse(), line.x, line.color, line.index, canvasData.height, canvasData.steps));
        this.timelineItems = items.map(item => new Point(() => this.getMouse(), item.x, item.y, item.pointIndex, item.lineIndex))
        this.timelineItems = items.map(item => new Point(() => this.getMouse(), item.x, item.y, item.pointIndex, item.lineIndex))
    }
    lines = [];
    timelineItems = [];
    getMouse() {
        return this.mouse;
    }
    redraw() {
        this.ctx.clearRect(0, 0, this.canvasData.width, this.canvasData.height+100);
        this.lines.forEach(line => {
            this.ctx.beginPath();
            this.ctx.shadowBlur = 15;
            this.ctx.shadowColor = line.color;
            this.ctx.strokeStyle = line.color;
            this.ctx.setLineDash([]);
            this.ctx.moveTo(line.points[0].x, line.points[0].y);
            for (let i = 0; i < line.points.length - 1; i++) {
                line.points[i].update();
                let xc = (line.points[i].x + line.points[i + 1].x) / 2;
                let yc = (line.points[i].y + line.points[i + 1].y) / 2;
                this.ctx.quadraticCurveTo(line.points[i].x, line.points[i].y, xc, yc);
                if(i === 0) {
                    this.ctx.textAlign = "center";
                    this.ctx.fillStyle = line.color;
                    this.ctx.font = "15px Noto Sans";
                    this.ctx.fillText(this.startYear, line.points[i].x, line.points[i].y);
                }
                if(i === line.points.length - 2) {
                    this.ctx.textAlign = "center";
                    this.ctx.fillStyle = line.color;
                    this.ctx.font = "15px Noto Sans";
                    this.ctx.fillText(this.endYear, line.points[i].x, line.points[i].y);
                }
            }
            this.ctx.stroke();
            this.timelineItems.forEach(point => {
                this.ctx.beginPath();
                if(point.pointIndex > -1 && point.lineIndex === line.lineIndex) {
                    this.ctx.beginPath();
                    this.ctx.setLineDash([]);
                    this.drawCircle(point.x, point.y, 5);
                    this.ctx.stroke();
                    this.ctx.beginPath();
                    this.ctx.moveTo(point.x, point.y);
                    this.ctx.setLineDash([2,2]);
                    this.ctx.lineTo(line.points[point.pointIndex].x, line.points[point.pointIndex].y);
                    this.ctx.stroke();
                    this.ctx.setLineDash([]);
                    this.ctx.beginPath();
                    this.drawCircle(line.points[point.pointIndex].x, line.points[point.pointIndex].y, 10);
                    this.ctx.stroke();
                }
                this.ctx.stroke();
            });
        })
    }
    drawCircle(x, y, radius) {
        this.ctx.arc(x, y, radius, 0, 2 * Math.PI);
    }
    animate(timestamp) {
        this.animationHandle = requestAnimationFrame(this.animate.bind(this));
        if(timestamp - this.lastTimestamp < 1000/100) return;
        this.lastTimestamp = timestamp;
        this.redraw();
    }
    cancel() {
        cancelAnimationFrame(this.animationHandle);
    }
}
export class Point {
    x; y;
    pointIndex = -1;
    lineIndex = -1;
    speed = 0.2;
    radius = 500;
    getMouse;
    base = {
        x : 0, y: 0
    }

    constructor(getMouse, x, y, pointIndex = -1, lineIndex = -1) {
        this.x = x;
        this.y = y;
        this.pointIndex = pointIndex;
        this.lineIndex = lineIndex;
        this.getMouse = getMouse;
        this.base = {
            x: x, y: y
        }
    }
    update() {
        let dx = this.x - this.getMouse().x;
        let dy = this.y - this.getMouse().y;
        let alpha = Math.atan2(dx, dy);
        alpha = (alpha > 0 ? alpha : 2 * Math.PI + alpha);
        let d = this.radius / Math.sqrt(dx * dx + dy * dy);

        this.y += Math.cos(alpha) * d + (this.base.y - this.y) * this.speed;
        this.x += Math.sin(alpha) * d + (this.base.x - this.x) * this.speed;
    }

}