package com.manager;

import java.sql.*;
import java.util.ArrayList;
import java.util.Hashtable;
import java.util.List;

import com.codoid.products.fillo.Recordset;

public class DatabaseConnector {
	// JDBC driver name and database URL
	static final String JDBC_DRIVER = "com.mysql.cj.jdbc.Driver";
	static final String DB_URL = "jdbc:mysql://elastic.rapidtestpro.com:2777/FishBank";

	// Database credentials
	static final String USER = "belitypi";
	static final String PASS = "47GWrkhPknA3";
	
	public static Hashtable<String, String> data_values = new Hashtable<String, String>();
	
	public Hashtable<String, String> getDataFromDatabase(String tableName, String databindinKey, String databindingValue)
			throws SQLException {
		Connection conn = null;
		Statement stmt = null;
		ResultSet  Data_RS = null;
		 
		try {
			// STEP 2: Register JDBC driver
			Class.forName("com.mysql.cj.jdbc.Driver");

			// STEP 3: Open a connection
			System.out.println("Connecting to database...");
			conn = DriverManager.getConnection(DB_URL, USER, PASS);

			// STEP 4: Execute a query
			System.out.println("Creating statement...");
			stmt = conn.createStatement();
			String sql;
			sql = "SELECT * FROM " + tableName + " WHERE " + databindinKey + "='" + databindingValue + "'";
			System.out.println(sql);
			Data_RS =  stmt.executeQuery(sql);
			
			ResultSetMetaData rsmd = Data_RS.getMetaData();
			
			List<String> cloumns = new ArrayList<String>();
			
			while(Data_RS.next()){
				for (int i = 1; i <= rsmd.getColumnCount(); i++) {
					
					String columnName = rsmd.getColumnName(i);
					String type = rsmd.getColumnTypeName(i);
					String columnValue = null;
					if(type=="VARCHAR") {
						columnValue = Data_RS.getString(columnName);
					}else if(type=="INT") {
						columnValue = Integer.toString(Data_RS.getInt(columnName));
					}
					System.out.println(columnName + columnValue);
					if (!(columnValue == "")) {
						data_values.put(columnName, columnValue);
					}
				}
		      }
			} catch (Exception e) {

			e.printStackTrace();
		} finally {
			Data_RS.close();
			stmt.close();
			conn.close();
		}
		return data_values;
		

	}
}
