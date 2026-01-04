import java.util.*;

public class RoomData {
    public static Map<String, String> roomDetails = new HashMap<>();
    public static Map<String, String> wardenContacts = new HashMap<>();

    static {
        roomDetails.put("A-101", "Room: A-101\nOccupants: Rahul, Amit");
        roomDetails.put("B-201", "Room: B-201\nOccupants: Sita, Geeta");

        wardenContacts.put("A-101", "Warden: Mr. Sharma\nPhone: 9876543210");
        wardenContacts.put("B-201", "Warden: Ms. Rao\nPhone: 9123456780");
    }
}
