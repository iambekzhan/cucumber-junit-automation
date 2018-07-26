package tests;

import org.junit.After;
import org.junit.AfterClass;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;

public class UnitTest {
	
	@BeforeClass
	public static void setUp() {
		System.out.println("This is setup before class");
	}
	
	@Before
	public void beforeTest() {
		System.out.println("This is before annotation");
	}
	
	@Test
	public void test2() {
		System.out.println("This is test2");
	}
	
	@Test
	public void test1() {
		System.out.println("This is test1");
	}
	
	@After
	public void afterTest() {
		System.out.println("This is after annotation");
	}
	
	@AfterClass
	public static void tearDown() {
		System.out.println("This is tear down after class");
	}
}
