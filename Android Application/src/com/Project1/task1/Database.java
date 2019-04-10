package com.Project1.task1;


import android.annotation.SuppressLint;
import android.app.Activity;
import android.os.Bundle;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;


@SuppressLint("SetJavaScriptEnabled")
public class Database extends Activity{
	@Override
	protected void onCreate(Bundle savedInstanceState) { 
		super.onCreate(savedInstanceState);
		setContentView(R.layout.data_web);
	
	
	//don't forget to add your Webview stuff
	WebView myWebView = (WebView) findViewById(R.id.webView1);
	WebSettings webSettings = myWebView.getSettings();
	//Yes, we want javascript, pls.
	webSettings.setJavaScriptEnabled(true);
	//Make sure links in the webview is handled by the webview and not sent to a full browser
	myWebView.setWebViewClient(new WebViewClient());
	 
	myWebView.loadUrl("http://www.active4lessuxbridge.com/");
	}

}
