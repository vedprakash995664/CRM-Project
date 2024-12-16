import React, { useState } from 'react';
import './AdminDashboardCSS.css'; // Import the CSS for styling

function AdminDashboard() {
  const [showModal, setShowModal] = useState(false);

  const handleAddClient = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div>
        <button onClick={handleAddClient}>Add to Client</button>
      </div>

      {showModal && (
        <div className="modal-backdrop" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <form>
              <h2>Add New Client</h2>
              <label>Name</label>
              <input type="text" />
              <label>Email</label>
              <input type="email" />
              <label>Phone</label>
              <input type="number" />
              <label>DOB</label>
              <input type="text" />
              <label>Company Name</label>
              <input type="text" />
              <label>Industry</label>
              <input type="text" />
              <label>Address</label>
              <input type="text" />
              <label>Job Title</label>
              <input type="text" />
              <label>Salary</label>
              <input type="text" />
              <label>About Client</label>
              <input type="text" />
              <label>Job Title</label>
              <input type="text" />
              <div>
                <button type="submit">Submit</button>
                <button type="button" onClick={handleCloseModal}>
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default AdminDashboard;
