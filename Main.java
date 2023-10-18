import javafx.application.Application;
import javafx.stage.Stage;
import javafx.scene.Scene;
import javafx.scene.layout.*;
import javafx.scene.shape.Rectangle;
import javafx.scene.paint.Color;
import javafx.scene.text.*;
import javafx.scene.image.*;
import javafx.geometry.Pos;
import javafx.animation.*;
import javafx.util.Duration;
import java.time.*;

public class Main extends Application {
  int screenW = 900;
  int screenH = 600;
  long mainMsTime = 0;
  float opc = 0;

  public float objectOpacity(float msTimeBegin, float msTimeEnd, float opacityBegin, float opacityEnd, float defaultOpacity) {
    if (msTimeBegin <= mainMsTime && mainMsTime <= msTimeEnd) {
      return opacityBegin + (opacityEnd - opacityBegin) * ((mainMsTime - msTimeBegin) / (msTimeEnd - msTimeBegin));
    }  
    else {
      return defaultOpacity;
    }
  }
  
  public void start(Stage primaryStage) {
    Rectangle mainBg = new Rectangle(0,0,900,600);
    mainBg.setFill(Color.rgb(255,255,255));
    AnImage img = new AnImage("IUTLogo.png", screenW * 0.5 - screenW * 0.25, screenH * 0.1, screenW * 0.5, screenH * 0.2);
    AText creators = new AText("M. Thiel, R. Lerouge, V. Lestrelin, M. Ditlecadet,\nA. Essalhi et M. Brahmi présentent", 0, 0, 0, "Arial", screenW * 0.125, screenH * 0.5, screenW * 0.75, screenH / 6);
    /*
    StackPane sp = new StackPane();
    sp.setMinWidth(screenW);
    sp.setMinHeight(screenH);
    sp.getChildren().add(title);
    sp.setAlignment(title,Pos.CENTER);
    */
    Pane p = new Pane();
    p.getChildren().addAll(mainBg, img.displayImage(), creators.displayText());
    
    Scene scene = new Scene(p,screenW,screenH);
    primaryStage.setTitle("A Simple Scene!");
    primaryStage.setScene(scene);
    primaryStage.show();

    Timeline tmln = new Timeline(new KeyFrame(Duration.millis(1), event -> {
      /*
      if (mainMsTime <= 2000) {
        creators.displayText().setOpacity(opc);
        opc += 0.0005;
      }

      if (5000 <= mainMsTime && mainMsTime <= 7000) {
        creators.displayText().setOpacity(opc);
        opc -= 0.0005;
      }
      
      title.setOpacity(objectOpacity(0, 2000, 0, 1, 0));
      title.setOpacity(objectOpacity(5000, 7000, 1, 0, 0));
      */

      ++mainMsTime;
    }));
    tmln.setCycleCount(Timeline.INDEFINITE);
    tmln.play();
  } 
    
  public static void main(String[] args) {
    launch(args);
  }
} 
