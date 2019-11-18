---
title: Prometheus
description: Instructions for population of Prometheus with Storidge metrics
lang: en-US
---

# Prometheus

Prometheus is the standard open-source monitoring solution for many clusters. As it does not come with a feature-rich dashboard, it is often paired with Grafana; Prometheus gathers time-series data, and Grafana visualizes it.

The CIO API makes the /metrics endpoint that Prometheus scrapes available on all machines on port 8282 by default.

We have made a Prometheus configuration file and sample Grafana dashboard available on our github.

## Setting up Prometheus and Grafana with ContainerIO

This guide assumes basic familiarity with Prometheus and Grafana.
[Prometheus Setup Docs](https://prometheus.io/docs/introduction/first_steps/)
[Grafana Setup Docs](https://grafana.com/docs/installation/)

1. Add each member of your CIO cluster to the Portworks configuration file. In this sample file, our four nodes are 192.168.3.51-54.

```yaml
# my global config
global:
  scrape_interval:     10s
  evaluation_interval: 10s

# Alertmanager configuration
alerting:
  alertmanagers:
  - static_configs:
    - targets:
      # - alertmanager:9093

# Load rules once and periodically evaluate them according to the global 'evaluation_interval'.
rule_files:
 - "prometheus.rules.yml"
  # - "second_rules.yml"

# A scrape configuration containing exactly one endpoint to scrape:
# Here it's Prometheus itself.
scrape_configs:
  # The job name is added as a label `job=<job_name>` to any timeseries scraped from this config.
  - job_name: 'prometheus'

    # metrics_path defaults to '/metrics'
    # scheme defaults to 'http'.

    static_configs:
    - targets: ['192.168.3.51:8282', '192.168.3.52:8282', '192.168.3.53:8282', '192.168.3.54:8282']

```
    Once this configuration is done, Prometheus can be initialized.

2. Verify that Prometheus is collecting data about CIO:

![Prometheus Dashboard](https://i.imgur.com/r1C4GBI.png)

3. To establish a proper monitoring solution, we recommend using Grafana with Prometheus. [Here is a link to our sample Grafana JSON dashboard.](https://grafana.com/grafana/dashboards/11213)

![Grafana Dashboard](https://i.imgur.com/94DZSg7.png)

## Exported Metrics

The following cluster information is available for reference on each of the nodes. The ContainerIO API refreshes metrics once per ten seconds.

cio_cluster_nodes_online | Number of nodes that are healthy
cio_cluster_nodes_maintenance | Number of nodes that are in maintenance mode
cio_cluster_nodes_cordoned | Number of nodes that are cordoned

cio_cluster_drives_online | Number of drives currently in use by CIO
cio_cluster_drives_available | Number of drives that can be used by CIO
cio_cluster_drives_failed | Number of drives are flagged as faulty, and should be replaced

cio_cluster_capacity_total | Total capacity currently available in CIO cluster
cio_cluster_capacity_used | Total capacity currently in use
cio_cluster_capacity_free | Total capacity that is available for use
cio_cluster_capacity_provisioned: Total capacity that is allocated for use by CIO volumes
cio_cluster_iops_total | Total IOPS currently available in CIO cluster
cio_cluster_iops_used | Total IOPS currently in use
cio_cluster_iops_free | Total IOPS that is available for use
cio_cluster_iops_provisioned | Total IOPS that is currently reserved for use by CIO volumes
cio_cluster_bw_total | Total bandwidth currently available in CIO cluster
cio_cluster_bw_used | Total bandwidth currently in use
cio_cluster_bw_free | Total bandwidth that is available for use
cio_cluster_bw_provisioned | Total bandwidth that is currently reserved for use by CIO volumes

The ContainerIO API dynamically exports the following data about CIO volumes that are created. The metrics are automatically removed once the volumes are deleted. The data is only available on the node the volume is on, so monitoring of all nodes by Prometheus is required. The data is derived from `/proc/diskstats`.

The vd0 in the examples below are replaced with the ID of the relevant volume. vd0 is typically reserved for cio cluster data.

cio_volume_vd0_current_ios | Number of current IOs in progress
cio_volume_vd0_reads_completed | Number of reads that have been performed on the volume
cio_volume_vd0_reads_merged | Number of times that two or more similar reads have been merged for increased efficiency
cio_volume_vd0_sectors_read | Number of sectors that have been read
cio_volume_vd0_sectors_written | Number of sectors that have been written
cio_volume_vd0_time_doing_ios | Time doing IOs, in ms
cio_volume_vd0_time_reading | Time spent reading, in ms
cio_volume_vd0_time_writing | Time spent writing, in ms
cio_volume_vd0_writes_completed | Number of write operations that have been completed on the volume
cio_volume_vd0_writes_merged | Number of times that two or more write requests have been merged for increased efficiency