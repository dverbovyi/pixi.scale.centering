/**
 * Created by Dmytro on 11/7/2015.
 */
var LayoutView = (function (Pixi, Helper, MapView, ButtonView, CircleView) {
    function LayoutView() {
        this.initialize();
    }

    Helper.extend(LayoutView, Pixi.Container);

    var proto = LayoutView.prototype;

    proto.initialize = function () {
        this.setup();
        this.moveCircle();
    };

    proto.setup = function () {
        this.mapView = new MapView();
        this.circleView = new CircleView(this);
        this.buttonView = new ButtonView(this);

        this.addChildAt(this.mapView, 0);
        this.addChildAt(this.circleView, 1);
        this.addChildAt(this.buttonView, 2);
    };

    proto.moveCircle = function(){
        if(this.circleView.position.x > document.body.offsetWidth) {
            this.circleView.zoomOut();
            this.zoomIn();
        }
        this.circleView.position.x += 1;
        this.moveTimeout = setTimeout(function(){
            this.moveCircle();
        }.bind(this), 10);
    };

    proto.zoomIn = function () {
        this.mapView.zoomIn();
    };

    proto.zoomOut = function () {
        this.mapView.zoomOut();
    };

    return LayoutView;
}(PIXI, Helper, MapView, ButtonView, CircleView));