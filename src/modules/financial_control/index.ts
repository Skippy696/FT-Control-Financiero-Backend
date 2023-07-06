import { ClientModule } from './client/client.module';
import { EnterpriseModule } from './enterprise/enterprise.module';
import { HumanRescourseModule } from './human-rescourse/human-resource.module';
import { InventoryModule } from './inventory/inventory.module';
import { InvoiceModule } from './invoice/invoice.module';
import { QuotationModule } from './quotation/quotation.module';
import { SupplierModule } from './supplier/supplier.module';
import { VacationModule } from './vacation/vacation.module';

export const financialControlModules = [
  InventoryModule,
  InvoiceModule,
  VacationModule,
  EnterpriseModule,
  HumanRescourseModule,
  ClientModule,
  QuotationModule,
  SupplierModule,
];
