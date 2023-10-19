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
import java.time.*;
import javafx.util.Duration;
import java.util.Map;
import java.util.HashMap;
import java.util.List;
import java.util.ArrayList;

public class Main extends Application {
  int screenW = 900;
  int screenH = 600;
  Map<AnImage, List<Integer>> imagesAppearances = new HashMap<>();
  Map<AText, List<Integer>> textsAppearances = new HashMap<>();
  List<Integer> imagesMs = new ArrayList<>();
  List<Integer> textsMs = new ArrayList<>();
  int mainMsTime = 0;
  
  public void start(Stage primaryStage) {    
    Rectangle mainBg = new Rectangle(0,0,900,600);
    mainBg.setFill(Color.rgb(255,255,255));
    
    AnImage iutLogo = new AnImage("IUTLogo.png", screenW * 0.5 - screenW * 0.25, screenH * 0.1, screenW * 0.5, screenH * 0.2);
    imagesMs = List.of(0, 5000);
    imagesAppearances.put(iutLogo, imagesMs);
    
    AText creators = new AText("M. Thiel, R. Lerouge, V. Lestrelin, M. Ditlecadet,\nA. Essalhi et M. Brahmi présentent", 0, 0, 0, "Arial", screenW * 0.125, screenH * 0.5, screenW * 0.75, screenH / 6);
    textsMs = List.of(0, 5000);
    textsAppearances.put(creators, textsMs);

    AText forDaily = new AText("Pour le site d'information marseillais", 0 , 0, 0, "Arial", screenW * 0.125, screenH * 0.1, screenW * 0.75, screenH / 6);
    textsMs = List.of(5000, 10000);
    textsAppearances.put(forDaily, textsMs);
    
    AnImage marsactuLogo = new AnImage("MarsactuLogo.png", screenW * 0.5 - screenW * 0.25, screenH * 0.5, screenW * 0.5, screenH * 0.2);
    imagesMs = List.of(5000, 10000);
    imagesAppearances.put(marsactuLogo, imagesMs);

    System.out.println(imagesAppearances.get(iutLogo));
    System.out.println(imagesAppearances.get(marsactuLogo));
    System.out.println(textsAppearances.get(creators));
    System.out.println(textsAppearances.get(forDaily));
  
    Pane p = new Pane();
    p.getChildren().addAll(mainBg, iutLogo.displayImage(), creators.displayText(), forDaily.displayText(), marsactuLogo.displayImage());
    
    Scene scene = new Scene(p,screenW,screenH);
    primaryStage.setTitle("A Simple Scene!");
    primaryStage.setScene(scene);
    primaryStage.show();

    Timeline tmln = new Timeline(new KeyFrame(Duration.millis(1), event -> {

      ++mainMsTime;
    }));
    tmln.setCycleCount(Timeline.INDEFINITE);
    tmln.play();
  } 
    
  public static void main(String[] args) {
    launch(args);
  }
} 
