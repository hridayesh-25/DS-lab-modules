import java.rmi.registry.LocateRegistry;
import java.rmi.registry.Registry;

public class RoomRMIServer {
    public static void main(String[] args) {
        try {
            RoomInfo service = new RoomInfoImpl();
            Registry registry = LocateRegistry.createRegistry(1099);
            registry.rebind("RoomService", service);
            System.out.println("RMI Server started");
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
