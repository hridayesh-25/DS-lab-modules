import java.rmi.server.UnicastRemoteObject;
import java.rmi.RemoteException;

public class RoomInfoImpl extends UnicastRemoteObject implements RoomInfo {

    protected RoomInfoImpl() throws RemoteException {
        super();
    }

    public String getRoomDetails(String roomNumber) {
        return RoomData.roomDetails.getOrDefault(
            roomNumber, "No room details found");
    }

    public String getWardenContact(String roomNumber) {
        return RoomData.wardenContacts.getOrDefault(
            roomNumber, "No warden contact found");
    }
}
