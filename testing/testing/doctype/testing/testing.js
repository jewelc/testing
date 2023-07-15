// Copyright (c) 2023, jctkorp.com and contributors
// For license information, please see license.txt

frappe.ui.form.on('Testing', {
	refresh: function(frm) {
		frappe.msgprint("Hi this is from another to test the push")
	}
});
