using System;
using AtomicEngine;

public class Spinner : CSComponent
{

   // [Inspector]    

    void Update(float timeStep)
    {
		var input = GetSubsystem<Input>();
		Node.Yaw(input.GetMouseMoveX());
    }

}
