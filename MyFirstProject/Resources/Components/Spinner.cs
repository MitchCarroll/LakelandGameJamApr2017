using System;
using AtomicEngine;

public class Spinner : CSComponent
{

	// [Inspector]    
	private bool captured = true;
    void Update(float timeStep)
    {
		var input = GetSubsystem<Input>();

		if (captured)
		{
			Node.Yaw(input.GetMouseMoveX() / 10, TransformSpace.TS_WORLD);
			input.SetMouseVisible(false);
		}
		else
		{
			input.SetMouseVisible(false);
		}
	}

}
