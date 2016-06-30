
defineClass('JPViewController', {
    handleBtn: function(sender) {
        var tableViewCtrl = JPTableViewController.alloc().init();
        self.navigationController().pushViewController_animated(tableViewCtrl, YES)
    }
})

require('UITableViewCell,UIAlertView');
defineClass('JPTableViewController', {
    dataSource: function() {
        var data = self.getProp('array')
        if (data) return data;
        var data = [];
        for (var i = 0; i < 20; i++) {
            data.push("cell index is " + i);
        }
        self.setProp_forKey(data, 'array')
        console.log('click btn ')
        return data;
    },
    tableView_numberOfRowsInSection: function(tableView, section) {
        return self.dataSource().count();
    },
    tableView_cellForRowAtIndexPath: function(tableView, indexPath) {
        var cell = tableView.dequeueReusableCellWithIdentifier("cell")
        if (!cell) {
            cell = UITableViewCell.alloc().initWithStyle_reuseIdentifier(0, "cell")
        }
        cell.textLabel().setText(self.dataSource().objectAtIndex(indexPath.row()));
        return cell
    },
    tableView_didSelectRowAtIndexPath: function(tableView, indexPath) {
        var alertView = UIAlertView.alloc().initWithTitle_message_delegate_cancelButtonTitle_otherButtonTitles("Alert", self.dataSource().objectAtIndex(indexPath.row()), self, "OK", null);
        alertView.show();
    },
    alertView_willDismissWithButtonIndex: function(alertView, buttonIndex) {
        console.log('click btn ' + alertView.buttonTitleAtIndex(buttonIndex).toJS())
    },
})