import com.sun.net.httpserver.HttpServer;
import java.io.OutputStream;
import java.net.InetSocketAddress;
import java.rmi.registry.LocateRegistry;
import java.rmi.registry.Registry;

public class HttpBridgeServer {

    public static void main(String[] args) {
        try {
            Registry registry = LocateRegistry.getRegistry("localhost", 1099);
            RoomInfo service = (RoomInfo) registry.lookup("RoomService");

            HttpServer server = HttpServer.create(new InetSocketAddress(8082), 0);

            server.createContext("/room-details", exchange -> {
                try {
                    exchange.getResponseHeaders().add("Access-Control-Allow-Origin", "*");
                    String query = exchange.getRequestURI().getQuery();
                    String room = query.split("=")[1];

                    String result = service.getRoomDetails(room);
                    sendSafe(exchange, result);
                } catch (Exception e) {
                    sendSafe(exchange, "ERROR");
                }
            });

            server.createContext("/warden-contact", exchange -> {
                try {
                    exchange.getResponseHeaders().add("Access-Control-Allow-Origin", "*");
                    String query = exchange.getRequestURI().getQuery();
                    String room = query.split("=")[1];

                    String result = service.getWardenContact(room);
                    sendSafe(exchange, result);
                } catch (Exception e) {
                    sendSafe(exchange, "ERROR");
                }
            });

            server.start();
            System.out.println("HTTP Bridge running on port 8082");

        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    static void sendSafe(com.sun.net.httpserver.HttpExchange exchange, String data) {
        try {
            String json = "{ \"result\": \"" + data.replace("\n", "\\n") + "\" }";
            exchange.sendResponseHeaders(200, json.length());
            OutputStream os = exchange.getResponseBody();
            os.write(json.getBytes());
            os.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
