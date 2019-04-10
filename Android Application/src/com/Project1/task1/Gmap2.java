package com.Project1.task1;

import com.google.android.gms.maps.GoogleMap;
import com.google.android.gms.maps.MapFragment;
import com.google.android.gms.maps.model.BitmapDescriptorFactory;
import com.google.android.gms.maps.model.LatLng;
import com.google.android.gms.maps.CameraUpdateFactory;
import com.google.android.gms.maps.model.MarkerOptions;

import android.annotation.SuppressLint;
import android.content.Intent;
import android.os.Bundle;
import android.support.v4.app.FragmentActivity;


@SuppressLint({ "NewApi", "SetJavaScriptEnabled" })
public class Gmap2 extends FragmentActivity {


	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.mapping2);
		
		gMap = ((MapFragment) getFragmentManager()
                .findFragmentById(R.id.map)).getMap();

        gMap.moveCamera(CameraUpdateFactory.newLatLngZoom(
                new LatLng(51.525976, -0.476905), 2));
		
        gMap.setMapType(GoogleMap.MAP_TYPE_TERRAIN);	// change map type
		gMap.setMyLocationEnabled(true);				// show where you are
		
		// giving a specific location when map starts
		 LatLng CLondon = new LatLng(51.508515, -0.125487);

	        gMap.setMyLocationEnabled(true);
	        gMap.moveCamera(CameraUpdateFactory.newLatLngZoom(CLondon, 18));

	        gMap.addMarker(new MarkerOptions()
	                .title("London")
	                .snippet("Here I live")
	                .position(CLondon));
		UFC();//method name, calling this method
        brunelSports();//method name, calling this method
        

	}
	
	GoogleMap gMap;
	
	 @SuppressLint("NewApi")
	    private void UFC() {
	    	gMap = ((MapFragment) getFragmentManager().findFragmentById(R.id.map)).getMap();
			LatLng pos = new LatLng(51.512256, -0.458456);
			gMap.addMarker(new MarkerOptions()
			.title("Uxbridge Football Club")
			.snippet("cick here")
			.icon(BitmapDescriptorFactory.defaultMarker(BitmapDescriptorFactory.HUE_GREEN))
			.position(pos));
		}



		@SuppressLint("NewApi")
	    private void brunelSports() {
	    	gMap = ((MapFragment) getFragmentManager().findFragmentById(R.id.map)).getMap();
			LatLng pos = new LatLng(51.525242, -0.469449);
			gMap.addMarker(new MarkerOptions()
			.title("Brunel University Sports Park")
			.snippet("Brunel University Sports Park is here")
			.icon(BitmapDescriptorFactory.defaultMarker(BitmapDescriptorFactory.HUE_GREEN))
			.position(pos));
		}

		Intent intent= getIntent();

}//class closed
