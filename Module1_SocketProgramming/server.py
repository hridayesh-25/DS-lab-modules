import asyncio
import websockets
import json

clients = set()
complaints = []

async def handler(websocket):
    clients.add(websocket)
    print("Client connected")

    await websocket.send(json.dumps({
        "type": "INIT",
        "data": complaints
    }))

    try:
        async for message in websocket:
            complaint = json.loads(message)
            complaints.append(complaint)

            broadcast_data = json.dumps({
                "type": "NEW_COMPLAINT",
                "data": complaint
            })

            await asyncio.gather(
                *[client.send(broadcast_data) for client in clients]
            )

    except:
        pass
    finally:
        clients.remove(websocket)
        print("Client disconnected")

async def main():
    async with websockets.serve(handler, "localhost", 8080):
        print("Server running on ws://localhost:8080")
        await asyncio.Future()

asyncio.run(main())
