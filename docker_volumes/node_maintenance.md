---
title: Node Maintenance
description: Put a node in maintenance to apply software updates or update hardware  
lang: en-US
---

# Node Maintenance

## Cordon node for maintenance

You may want to put a node in maintenance to apply software updates (non Storidge software), replace or update hardware.

Storidge supports cluster aware updates. This allows a node to be put into maintenance mode while the cluster is online and services continue to run on operating nodes.

To start maintenance on a node, run: 
```
cioctl node cordon <NODENAME>
```

The `cioctl node cordon` command is used to temporarily remove a node from the cluster for maintenance. Changed block tracking is engaged to track updates that are destined for the cordoned node. This enables fast rebuilds when the node is rejoined to the cluster after maintenance. The cordoned node is drained so services on the node are restarted by the scheduler onto other running nodes.

The node will show status 'cordoned' in `cio node ls`.

## Uncordon node to rejoin

After maintenance is completed, run: 
```
cioctl node uncordon
``` 

This rejoins the node back to the Storidge cluster. The uncordoned node is automatically re-enabled to run services.

If a node was powered off for maintenance, rebooting a node after maintenance is completed will automatically uncordon the node to rejoin the cluster.

## Extend maintenance window

When change block tracking is engaged, a maintenance window of 30 minutes is started. At the end of 30 minutes, the cordoned node will be automatically removed from the cluster so rebuilds can be started to restore redundancy.

If additional time is needed, the maintenance window can be extended. To extend time for maintenance up to maximum of 60 minutes, run: 
```
cioctl node extend-time TIME-IN-MINUTES
```

TIME-IN-MINUTES is an int value for the number of minutes to extend.

## Show maintenance window

To display time left in maintenance window, run: 
```
cioctl node show-time
```