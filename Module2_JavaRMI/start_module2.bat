@echo off
echo ================================
echo Module 2 : Java RMI
echo Hostel Room Information Service
echo ================================

cd backend

echo Compiling Java files...
javac *.java
if errorlevel 1 (
    echo Compilation failed!
    pause
    exit
)

echo Starting RMI Server...
start cmd /k java RoomRMIServer

timeout /t 3 > nul

echo Starting HTTP Bridge Server...
start cmd /k java HttpBridgeServer

timeout /t 2 > nul



echo ================================
echo All services started successfully
echo ================================