@echo off
echo =====================================
echo Starting Module 4 - P2P System
echo =====================================

echo Starting Peer 1 (TCP 9001, HTTP 8084)
start cmd /k "cd backend && python peer1.py"

timeout /t 2 > nul

echo Starting Peer 2 (TCP 9002, HTTP 8085)
start cmd /k "cd backend && python peer2.py"

timeout /t 2 > nul

echo Starting Peer 3 (TCP 9003, HTTP 8086)
start cmd /k "cd backend && python peer3.py"

timeout /t 2 > nul



echo =====================================
echo All peers and UI started successfully
echo =====================================
pause
