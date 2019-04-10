package com.Project1.task1;


import com.google.android.gms.maps.CameraUpdateFactory;
import com.google.android.gms.maps.GoogleMap;
import com.google.android.gms.maps.MapFragment;
import com.google.android.gms.maps.model.BitmapDescriptorFactory;
import com.google.android.gms.maps.model.LatLng;

import com.google.android.gms.maps.model.MarkerOptions;
import android.annotation.SuppressLint;
import android.content.Intent;
import android.os.Bundle;
import android.support.v4.app.FragmentActivity;


@SuppressLint("NewApi")
public class Gmap extends FragmentActivity {
	GoogleMap gMap;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.mapping);
     
        GoogleMap map = ((MapFragment) getFragmentManager()
                .findFragmentById(R.id.map)).getMap();

        map.moveCamera(CameraUpdateFactory.newLatLngZoom(
                new LatLng(51.525976, -0.476905), 2));
     // Other supported types include: MAP_TYPE_NORMAL,
        // MAP_TYPE_TERRAIN, MAP_TYPE_HYBRID and MAP_TYPE_NONE
        //map.setMapType(GoogleMap.MAP_TYPE_SATELLITE);
        map.setMapType(GoogleMap.MAP_TYPE_NORMAL);
        //map.setMapType(GoogleMap.MAP_TYPE_NONE);
        //map.setMapType(GoogleMap.MAP_TYPE_HYBRID);
        //map.setMapType(GoogleMap.MAP_TYPE_TERRAIN);
        
        // Get a handle to the Map Fragment
        LatLng CLondon = new LatLng(51.508515, -0.125487);

        map.setMyLocationEnabled(true);
        map.moveCamera(CameraUpdateFactory.newLatLngZoom(CLondon, 18));

        map.addMarker(new MarkerOptions()
                .title("London")
                .snippet("Here I live")
                .position(CLondon));
        //methods for markers
        truGym();//method name, calling this method
        Active4Less();//method name, calling this method
        Hillingdon_Sports();//method name, calling this method
        Curves();//method name, calling this method
        Rush_Fitness();//method name, calling this method
        Panthers();//method name, calling this method
        More_Energy();//method name, calling this method
        Virgin_active();//method name, calling this method
        Jazzercise();//method name, calling this method
 

        
    }
    
    
  
	@SuppressLint("NewApi")
    private void Jazzercise() {
    	gMap = ((MapFragment) getFragmentManager().findFragmentById(R.id.map)).getMap();
		LatLng pos = new LatLng(51.558034, -0.492175);
		gMap.addMarker(new MarkerOptions()
		.title("Jazzercise")
		.snippet("Jazzercise is here")
		.icon(BitmapDescriptorFactory.defaultMarker(BitmapDescriptorFactory.HUE_BLUE))
		.position(pos));
	}

	@SuppressLint("NewApi")
    private void Virgin_active() {
    	gMap = ((MapFragment) getFragmentManager().findFragmentById(R.id.map)).getMap();
		LatLng pos = new LatLng(51.512256, -0.458456);
		gMap.addMarker(new MarkerOptions()
		.title("Virgin Active")
		.snippet("Virgin Active is here")
		.icon(BitmapDescriptorFactory.defaultMarker(BitmapDescriptorFactory.HUE_BLUE))
		.position(pos));
	}

	@SuppressLint("NewApi")
    private void More_Energy() {
    	gMap = ((MapFragment) getFragmentManager().findFragmentById(R.id.map)).getMap();
		LatLng pos = new LatLng(51.533160, -0.469151);
		gMap.addMarker(new MarkerOptions()
		.title("More_Energy")
		.snippet("More Energy Fitness center is here")
		.icon(BitmapDescriptorFactory.defaultMarker(BitmapDescriptorFactory.HUE_BLUE))
		.position(pos));
	}

	@SuppressLint("NewApi")
    private void Panthers() {
    	gMap = ((MapFragment) getFragmentManager().findFragmentById(R.id.map)).getMap();
		LatLng pos = new LatLng(51.519955, -0.48133);
		gMap.addMarker(new MarkerOptions()
		.title("Panthers Health Club")
		.snippet("Panthers Health Club is here")
		.icon(BitmapDescriptorFactory.defaultMarker(BitmapDescriptorFactory.HUE_BLUE))
		.position(pos));
	}

	@SuppressLint("NewApi")
    private void Rush_Fitness() {
    	gMap = ((MapFragment) getFragmentManager().findFragmentById(R.id.map)).getMap();
		LatLng pos = new LatLng(51.549032, -0.482482);
		gMap.addMarker(new MarkerOptions()
		.title("RUSH Fitness Club")
		.snippet("RUSH Fitness is here")
		.icon(BitmapDescriptorFactory.defaultMarker(BitmapDescriptorFactory.HUE_BLUE))
		.position(pos));
	}

	@SuppressLint("NewApi")
    private void Curves(){
    	gMap = ((MapFragment) getFragmentManager().findFragmentById(R.id.map)).getMap();
		LatLng pos = new LatLng(51.548090, -0.479557);
		gMap.addMarker(new MarkerOptions()
		.title("Curves Womens Gym")
		.snippet("Curves is here")
		.icon(BitmapDescriptorFactory.defaultMarker(BitmapDescriptorFactory.HUE_BLUE))
		.position(pos));
	}

	@SuppressLint("NewApi")
    private void Hillingdon_Sports() {
    	gMap = ((MapFragment) getFragmentManager().findFragmentById(R.id.map)).getMap();
		LatLng pos = new LatLng(51.550670, -0.467627);
		gMap.addMarker(new MarkerOptions()
		.title("Hillingdon Sports & Leisure Complex")
		.snippet("Hillingdon Sports is here")
		.icon(BitmapDescriptorFactory.defaultMarker(BitmapDescriptorFactory.HUE_BLUE))
		.position(pos));
	}

	@SuppressLint("NewApi")
    private void Active4Less() {
    	gMap = ((MapFragment) getFragmentManager().findFragmentById(R.id.map)).getMap();
		LatLng pos = new LatLng(51.544067, -0.474066);
		gMap.addMarker(new MarkerOptions()
		.title("Active4Less")
		.snippet("Active4Less is here")
		.icon(BitmapDescriptorFactory.defaultMarker(BitmapDescriptorFactory.HUE_BLUE))
		.position(pos));
	}

	
    @SuppressLint("NewApi")
	private void truGym() {
    	gMap = ((MapFragment) getFragmentManager().findFragmentById(R.id.map)).getMap();
		LatLng pos = new LatLng(51.544858, -0.478164);
		gMap.addMarker(new MarkerOptions()
		.title("TruGym")
		.snippet("TruGym is here")
		.icon(BitmapDescriptorFactory.defaultMarker(BitmapDescriptorFactory.HUE_BLUE))
		.position(pos));
	}
	Intent intent= getIntent();


}//class closed
