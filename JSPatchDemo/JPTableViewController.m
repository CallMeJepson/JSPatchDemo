//
//  JPTableViewController.m
//  JSPatchDemo
//
//  Created by SunShine on 16/6/29.
//  Copyright © 2016年 JP. All rights reserved.
//

#import "JPTableViewController.h"

@interface JPTableViewController ()<UITableViewDataSource, UITableViewDelegate, UIAlertViewDelegate>

@property (nonatomic, strong) NSMutableArray *dataSource;
@end

@implementation JPTableViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    
    NSLog(@"%s", __func__);
    
    [self dataSource];
}

- (NSArray *)dataSource {
    if (!_dataSource) {
        _dataSource = [[NSMutableArray alloc] init];
        for (int i = 0; i < 20; i++) {
            [_dataSource addObject:[NSString stringWithFormat:@"cell index is %d", i]];
        }
    }
    
    NSLog(@"%s", __func__);
    
    return _dataSource;
}

@end
