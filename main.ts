input.onButtonPressed(Button.A, function () {
    mover(-100, 3)
    neZha.setServoAngel(neZha.ServoTypeList._360, neZha.ServoList.S1, 90)
    basic.pause(1000)
    neZha.setServoAngel(neZha.ServoTypeList._360, neZha.ServoList.S1, 0)
    mover(100, 2)
})
function mover (velocidad: number, tiempo: number) {
    neZha.setMotorSpeed(neZha.MotorList.M1, velocidad)
    basic.pause(1000 * tiempo)
    neZha.stopMotor(neZha.MotorList.M1)
}
basic.forever(function () {
	
})
