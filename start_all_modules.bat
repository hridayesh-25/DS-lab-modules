@echo off
echo ========================================
echo Starting Distributed Systems Project
echo ========================================

echo Starting Module 1 - Socket Programming
start cmd /k "cd Module1_SocketProgramming && start_module1.bat"

timeout /t 2 > nul

echo Starting Module 2 - Java RMI
start cmd /k "cd Module2_JavaRMI && start_module2.bat"

timeout /t 2 > nul

echo Starting Module 3 - REST API
start cmd /k "cd Module3_RESTAPI && start_module3.bat"

timeout /t 2 > nul

echo Starting Module 4 - P2P
start cmd /k "cd Module4_P2P && start_module4.bat"

timeout /t 2 > nul

echo Starting Module 5 - Shared Memory
start cmd /k "cd Module5_SharedMemory && start_module5.bat"

timeout /t 3 > nul

echo Opening Main Dashboard
start dashboard\index.html

echo ========================================
echo All modules started successfully
echo ========================================
pause
