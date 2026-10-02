async function main() {
    const MedicalRecords = await ethers.getContractFactory("MedicalRecords");
    const medicalRecords = await MedicalRecords.deploy();
    await medicalRecords.deployed();
    
    const [deployer, doctor, patient] = await ethers.getSigners();
    
    // Assign roles
    await medicalRecords.setRole(deployer.address, 2); // Admin
    await medicalRecords.setRole(doctor.address, 1);   // Doctor
    await medicalRecords.setRole(patient.address, 0);  // Patient
    
    console.log("MedicalRecords deployed to:", medicalRecords.address);
    console.log("Admin role assigned to:", deployer.address);
    console.log("Doctor role assigned to:", doctor.address);
    console.log("Patient role assigned to:", patient.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
