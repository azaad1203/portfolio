package com.Project1.task1;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.view.Menu;
import android.view.View;
import android.widget.ExpandableListView;
import android.widget.ExpandableListView.OnChildClickListener;
import android.widget.ExpandableListView.OnGroupClickListener;
import android.widget.ExpandableListView.OnGroupCollapseListener;
import android.widget.ExpandableListView.OnGroupExpandListener;
import android.widget.Toast;

public class List_pg extends Activity {

	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.activity_list);
		
		/**
		 * codes for expandable list view starts
		 */
		
		
					  // get the listview
			        expListView = (ExpandableListView) findViewById(R.id.lvExp_pg);
			 
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
			                // TODO Auto-generated method stub
			                Toast.makeText(
			                        getApplicationContext(),
			                        listDataHeader.get(groupPosition)
			                                + " : "
			                                + listDataChild.get(
			                                        listDataHeader.get(groupPosition)).get(
			                                        childPosition), Toast.LENGTH_SHORT)
			                        .show();
			                return false;
			            }
			        });
			        
			     /**   // MapView on child click listener
			        expListView.setOnChildClickListener(new OnChildClickListener(){
			        	
			        	@Override
			        	public boolean onChildClick(ExpandableListView parent, View v,int groupPosition,
			        			int childPosition,  long id){
			        		if (childPosition==3){
			        			showMap.findViewById(R.Layout.mapping);
			        		}
			        		return false;
			        	}
			        });		*/

		/**
		 * codes for expandable list view ends
		 */
	}
	
	
	
	// codes for expandable list starts from here
	   ExpandableListAdapter listAdapter;
	    ExpandableListView expListView;
	    
	    List<String> listDataHeader;
	    HashMap<String, List<String>> listDataChild;
	
	    /*
	     * Preparing the list data
	     */
	    public void prepareListData() {
	        listDataHeader = new ArrayList<String>();
	        listDataChild = new HashMap<String, List<String>>();
	 
	        // Adding child data
	        listDataHeader.add("Uxbridge Football Club");
	        listDataHeader.add("Brunel University Sports Park");
	      
	        // Adding child data
	        List<String>UF_club = new ArrayList<String>();
	        UF_club.add("Horton Road, West Drayton, Uxbridge, Middlesex, UB7 8HX");
	        UF_club.add("Tel: 01895 443 557");
	        UF_club.add("Website: pitchero.com");
	        
	        List<String>BR_sports = new ArrayList<String>();
	        BR_sports.add("Kingston Ln, Uxbridge, Greater London, UB8 3PH");
	        BR_sports.add("Tel: 01895 265 608");
	        BR_sports.add("Website: brunel.ac.uk");
	        
	        listDataChild.put(listDataHeader.get(0), UF_club); // Header, Child data
	        listDataChild.put(listDataHeader.get(1), BR_sports);
	        
	    }
	
	Intent intent = getIntent();
	
	public void showMap2(View view){
		Intent intent = new Intent(this, Gmap2.class);
		startActivity(intent);
	}


	@Override
	public boolean onCreateOptionsMenu(Menu menu) {
		// Inflate the menu; this adds items to the action bar if it is present.
		getMenuInflater().inflate(R.menu.list, menu);
		return true;
	}

}
