package com.Project1.task1;

import android.os.Bundle;
import android.app.Activity;
import android.view.View;
import android.content.Intent;
import android.view.Menu;


public class MainActivity extends Activity {


	
	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.activity_main);     
       
	}

	
	@Override
	public boolean onCreateOptionsMenu(Menu menu) {
		// Inflate the menu; this adds items to the action bar if it is present.
		getMenuInflater().inflate(R.menu.main, menu);
		return true;
	}
	
   
	
	public void gymList(View view){
		Intent intent = new Intent(this, List2.class);	// mention which class you want to use
		startActivity(intent);		// start activity
	}
	
	public void pgList(View view){
		Intent intent = new Intent(this, List_pg.class);	// mention which class you want to use
		startActivity(intent);		// start activity
	}
	

	
	

}
