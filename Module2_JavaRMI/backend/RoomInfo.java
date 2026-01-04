import java.rmi.Remote;
import java.rmi.RemoteException;

public interface RoomInfo extends Remote {
    String getRoomDetails(String roomNumber) throws RemoteException;
    String getWardenContact(String roomNumber) throws RemoteException;
}
