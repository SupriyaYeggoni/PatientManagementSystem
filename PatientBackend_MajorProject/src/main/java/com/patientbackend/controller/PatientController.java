package com.patientbackend.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.patientbackend.exception.ResourceNotfoundException;
import com.patientbackend.model.Patient;
import com.patientbackend.repository.PatientRepository;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1/")
public class PatientController {

	@Autowired
	private PatientRepository patientRepository;
	
	@GetMapping("/patients")
	public List<Patient> getAllPatients(){
		return patientRepository.findAll();
	}
	
	@PostMapping("/patients")
	public Patient createPatient(@RequestBody Patient patient) {
		return patientRepository.save(patient);
	}
	
	@GetMapping("/patients/{id}")
	public ResponseEntity<Patient> getPatientById(@PathVariable Long id) {
		Patient patient = patientRepository.findById(id)
				.orElseThrow(() -> new ResourceNotfoundException("Patient not exist with id :" + id));
		return ResponseEntity.ok(patient);
	}
	
	@PutMapping("/patients/{id}")
	public ResponseEntity<Patient> updatePatient(@PathVariable Long id, @RequestBody Patient patientDetails){
		Patient patient = patientRepository.findById(id)
				.orElseThrow(() -> new ResourceNotfoundException("Patient not exist with id :" + id));
		patient.setPatientName(patientDetails.getPatientName());
		patient.setDoctor(patientDetails.getDoctor());
		patient.setMobileNumber(patientDetails.getMobileNumber());
		patient.setAge(patientDetails.getAge());
		patient.setGender(patientDetails.getGender());
		patient.setDisease(patientDetails.getDisease());
		patient.setAdmittedDate(patientDetails.getAdmittedDate());
		patient.setDischargedDate(patientDetails.getDischargedDate());
		patient.setPayment(patientDetails.getPayment());
		patient.setPayment(patientDetails.getPayment());
		patient.setBalanceAmount(patientDetails.getBalanceAmount());
		patient.setAmountDue(patientDetails.getAmountDue());
		
		Patient updatedPatient = patientRepository.save(patient);
		return ResponseEntity.ok(updatedPatient);
	}
	
	@DeleteMapping("/patients/{id}")
	public ResponseEntity<Map<String, Boolean>> deletePatient(@PathVariable Long id){
		Patient patient = patientRepository.findById(id)
				.orElseThrow(() -> new ResourceNotfoundException("Patient not exist with id :" + id));
		
		patientRepository.delete(patient);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
}
