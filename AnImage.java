import javafx.scene.image.Image;
import javafx.scene.image.ImageView;

public class AnImage {
  String path;
  double x, y, w, h;
  public AnImage(String path, double x, double y, double w, double h) {
    this.path = path;
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }

  public ImageView displayImage() {
    Image image = new Image(this.path);
    ImageView imageView = new ImageView(image);
    imageView.setImage(image);
    imageView.setX(this.x);
    imageView.setY(this.y);
    imageView.setFitWidth(this.w);
    imageView.setFitHeight(this.h);
    return imageView;
  }

  public void setX(double x) {
    this.x = x;
    displayImage().setX(this.x);
  }

  public void setY(double y) {
    this.y = y;
    displayImage().setY(this.y);
  }

  public void setW(double w) {
    this.w = w;
    displayImage().setFitWidth(this.w);
  }

  public void setH(double h) {
    this.h = h;
    displayImage().setFitHeight(this.h);
  }
}
