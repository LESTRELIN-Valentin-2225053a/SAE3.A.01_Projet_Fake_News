import javafx.scene.text.*;
import javafx.scene.paint.Color; 
import javafx.scene.image.WritableImage;
import javafx.scene.SnapshotParameters;
import javafx.scene.image.ImageView;

public class AText {
  String content;
  int r, g, b;
  String font;
  double x, y, w, h;
  
  public AText(String content, int r, int g, int b, String font, double x, double y, double w, double h) {
    this.content = content;
    this.r = r;
    this.g = g;
    this.b = b;
    this.font = font;
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  } 

  public ImageView displayText() {
    Text text = new Text();
    text.setText(this.content);
    text.setFont(Font.font(this.font, 100));
    text.setFill(Color.rgb(this.r, this.g, this.b));
    text.setX(this.x + 100);
    text.setY(this.y + 100);
    WritableImage img = text.snapshot(new SnapshotParameters(), null);
    ImageView capturedText = new ImageView(img);
    capturedText.setImage(img);
    capturedText.setX(this.x);
    capturedText.setY(this.y);
    capturedText.setFitWidth(this.w);
    capturedText.setFitHeight(this.h);
    return capturedText;
  }
}
