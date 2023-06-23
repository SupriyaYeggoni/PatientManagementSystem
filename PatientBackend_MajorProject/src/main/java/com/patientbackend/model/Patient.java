package com.patientbackend.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "patientdetails")
public class Patient {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
private int id;
	
	@Column(name="patient_name")
	private String patientName;
	
	@Column(name="doctor")
	private String doctor;
	
   @Column(name="mobile_number")
   private long mobileNumber;
	
	@Column(name="age")
	private int age;
	
	@Column(name="gender")
	private String gender;
	
	@Column(name="disease")
	private String disease;
	
	@Column(name="admitted_date")
	private String admittedDate;
	
	@Column(name="discharged_date")
	private String dischargedDate;
	
	@Column(name="payment")
	private int payment;
	
	@Column(name="balance_amount")
	private int balanceAmount;
	
	@Column(name="amount_due")
	private String amountDue;

	public Patient() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Patient(int id, String patientName, String doctor, long mobileNumber, int age, String gender, String disease,
			String admittedDate, String dischargedDate, int payment, int balanceAmount, String amountDue) {
		super();
		this.id = id;
		this.patientName = patientName;
		this.doctor = doctor;
		this.mobileNumber = mobileNumber;
		this.age = age;
		this.gender = gender;
		this.disease = disease;
		this.admittedDate = admittedDate;
		this.dischargedDate = dischargedDate;
		this.payment = payment;
		this.balanceAmount = balanceAmount;
		this.amountDue = amountDue;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getPatientName() {
		return patientName;
	}

	public void setPatientName(String patientName) {
		this.patientName = patientName;
	}

	public String getDoctor() {
		return doctor;
	}

	public void setDoctor(String doctor) {
		this.doctor = doctor;
	}

	public long getMobileNumber() {
		return mobileNumber;
	}

	public void setMobileNumber(long mobileNumber) {
		this.mobileNumber = mobileNumber;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getDisease() {
		return disease;
	}

	public void setDisease(String disease) {
		this.disease = disease;
	}

	public String getAdmittedDate() {
		return admittedDate;
	}

	public void setAdmittedDate(String admittedDate) {
		this.admittedDate = admittedDate;
	}

	public String getDischargedDate() {
		return dischargedDate;
	}

	public void setDischargedDate(String dischargedDate) {
		this.dischargedDate = dischargedDate;
	}

	public int getPayment() {
		return payment;
	}

	public void setPayment(int payment) {
		this.payment = payment;
	}

	public int getBalanceAmount() {
		return balanceAmount;
	}

	public void setBalanceAmount(int balanceAmount) {
		this.balanceAmount = balanceAmount;
	}

	public String getAmountDue() {
		return amountDue;
	}

	public void setAmountDue(String amountDue) {
		this.amountDue = amountDue;
	}

	@Override
	public String toString() {
		return "Patient [id=" + id + ", patientName=" + patientName + ", doctor=" + doctor + ", mobileNumber="
				+ mobileNumber + ", age=" + age + ", gender=" + gender + ", disease=" + disease + ", admittedDate="
				+ admittedDate + ", dischargedDate=" + dischargedDate + ", payment=" + payment + ", balanceAmount="
				+ balanceAmount + ", amountDue=" + amountDue + "]";
	}

	
	

}
