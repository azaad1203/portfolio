package com.Project1.task1;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import android.app.Activity;
import android.os.Bundle;
import android.view.View;

import android.content.Intent;
import android.view.Menu;

import android.widget.ExpandableListView;
import android.widget.ExpandableListView.OnChildClickListener;
import android.widget.ExpandableListView.OnGroupClickListener;
import android.widget.ExpandableListView.OnGroupCollapseListener;
import android.widget.ExpandableListView.OnGroupExpandListener;
import android.widget.Toast;

public class List2 extends Activity {

	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.activity_list2);
		
		/**
		 * codes for expandable list view starts
		 */
					  // get the listview
			        expListView = (ExpandableListView) findViewById(R.id.lvExp);
			 
			        // preparing list data
			        prepareListData();
			 
			        listAdapter = new ExpandableListAdapter(this, listDataHeader, listDataChild);
			 
			        // setting list adapter
			        expListView.setAdapter(listAdapter);
			        
			        // Listview Group click listener
			        expListView.setOnGroupClickListener(new OnGroupClickListener() {
			 
			            @Override
			            public boolean onGroupClick(ExpandableListView parent, View v,
			                    int groupPosition, long id) {
			                // Toast.makeText(getApplicationContext(),
			                // "Group Clicked " + listDataHeader.get(groupPosition),
			                // Toast.LENGTH_SHORT).show();
			                return false;
			            }
			        });
			        
			     // Listview Group expanded listener
			        expListView.setOnGroupExpandListener(new OnGroupExpandListener() {
			 
			            @Override
			            public void onGroupExpand(int groupPosition) {
			                Toast.makeText(getApplicationContext(),
			                        listDataHeader.get(groupPosition) + " Expanded",
			                        Toast.LENGTH_SHORT).show();
			            }
			        });
			 
			        // Listview Group collasped listener
			        expListView.setOnGroupCollapseListener(new OnGroupCollapseListener() {
			 
			            @Override
			            public void onGroupCollapse(int groupPosition) {
			                Toast.makeText(getApplicationContext(),
			                        listDataHeader.get(groupPosition) + " Collapsed",
			                        Toast.LENGTH_SHORT).show();
			 
			            }
			        });
			 
			        // Listview on child click listener
			        expListView.setOnChildClickListener(new OnChildClickListener() {
			 
			            @Override
			            public boolean onChildClick(ExpandableListView parent, View v,
			                    int groupPosition, int childPosition, long id) {
			               
			                Toast.makeText(
			                        getApplicationContext(),
			                        listDataHeader.get(groupPosition)
			                                + " : "
			                                + listDataChild.get(
			                                        listDataHeader.get(groupPosition)).get(
			                                        childPosition), Toast.LENGTH_SHORT)
			                        .show();
			                if(groupPosition==0 && childPosition==2){
			                	web(v);
			                }
			                return false;
			            }
			        });


		/**
		 * codes for expandable list view ends
		 */

	}
	
	public void web(View view){

			Intent intent = new Intent(this, Database.class);	// mention which class you want to use
			startActivity(intent);		// start activity
		
	}
	
	// codes for expandable list starts from here
	   ExpandableListAdapter listAdapter;
	    ExpandableListView expListView;
	    List<String> listDataHeader;
	    HashMap<String, List<String>> listDataChild;
	

	    
	    /*
	     * Preparing the list data
	     */
	   private void prepareListData() {
	        listDataHeader = new ArrayList<String>();
	        listDataChild = new HashMap<String, List<String>>();
	 
	        // Adding child data
	        listDataHeader.add("Active4Less Uxbridge");
	        listDataHeader.add("Hillingdon Sports & Leisure Complex");
	        listDataHeader.add("Curves Womens Gym");
	        listDataHeader.add("RUSH Fitness Club Uxbridge");
	        listDataHeader.add("truGym");
	        listDataHeader.add("Panthers Health Club");
	       
	        listDataHeader.add("More Energy Fitness Centre");
	        listDataHeader.add("Virgin Active");
	        listDataHeader.add("Jazzercise");
	        
	    
	 
	        // Adding child data
	        List<String>Active4Less = new ArrayList<String>();
	        Active4Less.add("233 High Street, Uxbridge, Middlesex. UB8 1LE");
	        Active4Less.add("Email: Uxbridge@Active4Less.com");
	        Active4Less.add("Website: www.active4lessuxbridge.com/");
	        Active4Less.add("Tel: 01895 271217");
	        
	 
	        List<String>Hillingdon_Sports = new ArrayList<String>();
	        Hillingdon_Sports.add("Gatting Way");
	        Hillingdon_Sports.add("Uxbridge, Middlesex, UB8 1ES");
	        Hillingdon_Sports.add("Website:www.fusion-lifestyle.com/centres/Hillingdon_Sport_and_Leisure_Complex");
	        Hillingdon_Sports.add("Tel: 0845 130 7324");
	     
	 
	        List<String>Curves_Womens = new ArrayList<String>();
	        Curves_Womens.add("Redford Way, Uxbridge, Middlesex UB8 1SZ");
	        Curves_Womens.add("Tel: 01895 251954");
	        Curves_Womens.add("Website: curves.co.uk");
	        
	        List<String>RUSH_Fitness = new ArrayList<String>();
	        RUSH_Fitness.add("High street, Uxbridge, Middlesex, UB8 1JR");
	        RUSH_Fitness.add("Tel: 01895 236 518");
	        RUSH_Fitness.add("Website:www.rushfitness.co.uk/");
	        RUSH_Fitness.add("Email: info@rushfitness.co.uk");
	        
	        List<String>tgym = new ArrayList<String>();
	        tgym.add("The Leisure Buildings, Vine Street, Uxbridge, Middlesex UB8 1TD");
	        tgym.add("Tel: 01895 239388");
	        tgym.add("Website: trugym.co.uk");
	        
	        List<String>Panthers = new ArrayList<String>();
	        Panthers.add("2 Point West Building, Packet Boat Lane, Cowley, Uxbridge UB8 2JP");
	        Panthers.add("Tel: 01895 436000");
	        Panthers.add("Website: panthersgym.co.uk");
	        
	  
	        
	        List<String>More_Energy = new ArrayList<String>();
	        More_Energy.add("Brunel Sports Centre, Kingston Ln, Uxbridge UB8 3PH");
	        More_Energy.add("Tel: 01895 265 309");
	        More_Energy.add("Website: more-energy.co.uk");
	        
	        List<String>Virgin_Active = new ArrayList<String>();
	        Virgin_Active.add("The Leisure Building, Middlesex, West London UB8 1TD");
	        Virgin_Active.add("Tel: 01895 270044");
	        Virgin_Active.add("Website: virginactive.co.uk");
	        
	        List<String>Jazzercise = new ArrayList<String>();
	        Jazzercise.add("New Denham Community Centre/Oxford Road, Uxbridge UB9 4DW");
	        Jazzercise.add("Tel: 07803 602142");
	        Jazzercise.add("Website: jcls.jazzercise.com");
	 
	        listDataChild.put(listDataHeader.get(0), Active4Less); // Header, Child data
	        listDataChild.put(listDataHeader.get(1), Hillingdon_Sports);
	        listDataChild.put(listDataHeader.get(2), Curves_Womens);
	        listDataChild.put(listDataHeader.get(3), RUSH_Fitness);
	        listDataChild.put(listDataHeader.get(4), tgym);
	        listDataChild.put(listDataHeader.get(5), Panthers);
	     
	        listDataChild.put(listDataHeader.get(6), More_Energy);
	        listDataChild.put(listDataHeader.get(7), Virgin_Active);
	        listDataChild.put(listDataHeader.get(8), Jazzercise);
	        
	        
	    }
	   

	

	Intent intent= getIntent();
	
	public void showMap(View view){
		Intent intent = new Intent(this, Gmap.class);
		startActivity(intent);
	}

	@Override
	public boolean onCreateOptionsMenu(Menu menu) {
		// Inflate the menu; this adds items to the action bar if it is present.
		getMenuInflater().inflate(R.menu.list2, menu);
		return true;
	}

}
