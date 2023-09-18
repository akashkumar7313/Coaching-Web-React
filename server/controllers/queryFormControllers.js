const QueryForm = require("../models/queryForm");

// Create queryForm
exports.createQueryForm = async (req, res) => {
  try {
    const { name, email, mobileNo, courseToApply } = req.body;

    // Check if queryForm with the same name already exists
    const existingformName = await QueryForm.findOne({ name: name });

    if (existingformName) {
      return res.status(400).json({
        success: false,
        message: "Name already exists",
        alert: true,
      });
    }

    // Check if queryForm with the same email already exists
    const existingformEmail = await QueryForm.findOne({ email: email });

    if (existingformEmail) {
      return res.status(400).json({
        success: false,
        message: "Email already exists",
      });
    }

    // Check if queryForm with the same mobileNo already exists
    const existingformMobile = await QueryForm.findOne({ mobileNo: mobileNo });

    if (existingformMobile) {
      return res.status(400).json({
        success: false,
        message: "Mobile number already exists",
      });
    }

    // Check if queryForm with the same courseToApply already exists
    const existingformApplyCourse = await QueryForm.findOne({
        courseToApply: courseToApply,
    });

    if (existingformApplyCourse) {
      return res.status(400).json({
        success: false,
        message: "Course to apply already exists",
      });
    }

    // Check if courseToApply field is provided
    if (!courseToApply) {
      return res.status(400).json({
        success: false,
        message: "Course to apply is required",
      });
    }

    const newQueryForm = await QueryForm.create(req.body);
    res.status(201).json({
      success: true,
      message: "Form filled successfully",
      newQueryForm
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// Read queryForm
exports.getQueryForm = async (req, res) => {
  try {
    const queryForms = await QueryForm.find();
    res.status(200).json({
      success: true,
      message: "Query forms retrieved successfully",
      queryForms,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// Update queryForm
exports.updateQueryFormById = async (req, res) => {
  try {
    const updatedQueryForm = await QueryForm.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json({
      success: true,
      message: "Form updated successfully",
      QueryForm: updatedQueryForm,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// Delete queryForm
exports.deleteQueryForm = async (req, res) => {
  try {
    const deletedQueryForm = await QueryForm.findByIdAndDelete(req.params.id);
    res.status(200).json({
      success: true,
      message: "Form deleted successfully",
      QueryForm: deletedQueryForm,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
